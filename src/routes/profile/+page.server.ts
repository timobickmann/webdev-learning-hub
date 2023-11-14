import { auth } from '$lib/server/lucia';
import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import type { User } from '@prisma/client';
import { prismaClient } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
	const _user = (await prismaClient.user.findUnique({
		where: { id: session.user.userId }
	})) as User;
	const user = { ..._user, role: String(_user.role) };
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

	updateUser: async ({ request }) => {
		const { nameInput, id } = Object.fromEntries(await request.formData()) as {
			nameInput: string;
			id: string;
		};
		try {
			await prismaClient.user.update({ where: { id: id }, data: { name: nameInput } });
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not update the user' });
		}
		return {
			status: 201
		};
	}
};
