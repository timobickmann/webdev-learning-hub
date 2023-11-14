import { prismaClient } from '$lib/server/prisma';
import type { User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals }) => {
	try {
		const session = await locals.auth.validate();
		const _user = (await prismaClient.user.findUnique({
			where: { id: session?.user.userId }
		})) as User;
		let user;
		if (!_user) {
			user = { name: 'Guest', role: 'guest' };
		}

		user = { name: _user.name, role: String(_user.role) };
		return new Response(JSON.stringify({ user }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'No User found' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
};
