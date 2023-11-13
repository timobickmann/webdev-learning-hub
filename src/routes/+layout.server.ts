import { getUser } from '$lib/getUser.js';

export const load = async ({ locals }) => {
	const user = getUser(locals);
	return { user };
};
