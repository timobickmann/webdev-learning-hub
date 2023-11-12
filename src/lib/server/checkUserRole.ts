import { prismaClient } from '$lib/server/prisma';

export const checkUserRole = async (locals: App.Locals, role: string) => {
	const session = await locals.auth.validate();
	const user = await prismaClient.user.findUnique({ where: { id: session?.user.userId } });
	if (user?.role !== role) {
		return {
			status: 403,
			body: { error: 'Access denied' }
		};
	}
};
