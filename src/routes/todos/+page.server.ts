import type { PageServerLoad, Actions } from './$types';
import type { Todo, TodoStatus } from '@prisma/client';
import { prismaClient } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const todosTodo = (await prismaClient.todo.findMany({ where: { status: 'todo' } })) as Todo[];
	const todosDoing = (await prismaClient.todo.findMany({ where: { status: 'doing' } })) as Todo[];
	const todosDone = (await prismaClient.todo.findMany({ where: { status: 'done' } })) as Todo[];

	return { todosTodo, todosDoing, todosDone };
};

export const actions: Actions = {
	addTodo: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401, { message: 'Unauthorized' });

		const { title } = Object.fromEntries(await request.formData()) as { title: string };

		try {
			await prismaClient.todo.create({ data: { title, status: 'todo' } });
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not create the todo' });
		}
		return {
			status: 201
		};
	},

	deleteTodo: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401, { message: 'Unauthorized' });

		const { id } = Object.fromEntries(await request.formData()) as { id: string };

		try {
			await prismaClient.todo.delete({ where: { id: id } });
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not delete the todo' });
		}

		return {
			status: 204
		};
	},

	editTodo: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401, { message: 'Unauthorized' });

		const { id, title, status } = Object.fromEntries(await request.formData()) as {
			id: string;
			title: string;
			status: TodoStatus;
		};

		try {
			await prismaClient.todo.update({ where: { id: id }, data: { title, status } });
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not update the todo' });
		}

		return {
			status: 204
		};
	}
};
