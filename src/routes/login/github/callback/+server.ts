import { auth, githubAuth } from '$lib/server/lucia';
import { OAuthRequestError } from '@lucia-auth/oauth';

export const GET = async ({ cookies, url, locals }) => {
	const storedState = cookies.get('github_oauth_state');
	const state = url.searchParams.get('state');
	const code = url.searchParams.get('code');

	if (!storedState || !state || storedState !== state || !code) {
		return new Response(null, { status: 400 });
	}

	try {
		const { getExistingUser, githubUser, createUser } = await githubAuth.validateCallback(code);

		const getUser = async () => {
			const existingUser = await getExistingUser();
			if (existingUser) return existingUser;
			const user = await createUser({
				attributes: {
					username: githubUser.login
				}
			});
			return user;
		};

		const user = await getUser();
		const session = await auth.createSession({
			userId: user.userId,
			attributes: {}
		});

		locals.auth.setSession(session);
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/profile'
			}
		});
	} catch (error) {
		if (error instanceof OAuthRequestError) {
			return new Response(error.message, {
				status: 400
			});
		}
		if (error instanceof Error) {
			return new Response(error.message, {
				status: 500
			});
		}
	}
};
