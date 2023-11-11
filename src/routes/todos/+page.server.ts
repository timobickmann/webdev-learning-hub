import type { PageServerLoad } from './$types';
import type { Todo } from '@prisma/client';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/todos');
	const data = (await response.json()) as Todo[];

	return { todos: data };
};
