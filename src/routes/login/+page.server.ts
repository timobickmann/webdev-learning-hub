import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { getUser } from '$lib/server/getUser';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) {
		const user = getUser(locals);
		return { user };
	} else throw redirect(302, '/');
};
