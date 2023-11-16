import { auth } from '$lib/server/lucia';
import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { prismaClient } from '$lib/server/prisma';
import { getUser } from '$lib/server/getUser';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
	const user = await getUser(locals);
	return { user };
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, '/login');
	},

	updateUser: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401, { message: 'Unauthorized' });
		const { nameInput } = Object.fromEntries(await request.formData()) as {
			nameInput: string;
		};
		try {
			await prismaClient.user.update({
				where: { id: session?.user.userId },
				data: { name: nameInput }
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not update the user' });
		}
		return {
			status: 201
		};
	}
};
