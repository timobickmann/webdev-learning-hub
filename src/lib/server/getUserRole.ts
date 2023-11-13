import { prismaClient } from '$lib/server/prisma';

export const getUserRole = async (locals: App.Locals) => {
	let userRole = 'guest';
	const session = await locals.auth.validate();
	if (session) {
		const user = await prismaClient.user.findUnique({ where: { id: session.user.userId } });
		if (user) {
			userRole = user.role;
		}
	}
	return userRole;
};
