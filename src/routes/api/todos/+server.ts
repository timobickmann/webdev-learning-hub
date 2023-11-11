import { prisma } from '$lib/db.server';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const todos = await prisma.todo.findMany();
	return json(todos);
};
