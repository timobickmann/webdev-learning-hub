import type { PageServerLoad, Actions } from './$types';
import type { Todo } from '@prisma/client';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	const todosTodo = (await prisma.todo.findMany({ where: { status: 'todo' } })) as Todo[];
	const todosDoing = (await prisma.todo.findMany({ where: { status: 'doing' } })) as Todo[];
	const todosDone = (await prisma.todo.findMany({ where: { status: 'done' } })) as Todo[];

	return { todosTodo, todosDoing, todosDone };
};

export const actions: Actions = {
	addTodo: async ({ request }) => {
		const { title } = Object.fromEntries(await request.formData()) as { title: string };

		try {
			await prisma.todo.create({ data: { title, status: 'todo' } });
		} catch (error) {
			console.error(error);
			return { status: 500, message: 'Could not create the todo' };
		}
		return {
			status: 201
		};
	}
};
