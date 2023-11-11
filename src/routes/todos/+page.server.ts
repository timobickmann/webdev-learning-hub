import type { PageServerLoad } from './$types';
import type { Todo } from '@prisma/client';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	const todosTodo = (await prisma.todo.findMany({ where: { status: 'todo' } })) as Todo[];
	const todosDoing = (await prisma.todo.findMany({ where: { status: 'doing' } })) as Todo[];
	const todosDone = (await prisma.todo.findMany({ where: { status: 'done' } })) as Todo[];

	return { todosTodo, todosDoing, todosDone };
};
