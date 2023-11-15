import { prismaClient } from '$lib/server/prisma';

export const getUser = async (locals: App.Locals) => {
	const user = { name: 'Guest', userRole: 'guest' };
	const session = await locals.auth.validate();
	if (session) {
		const dbuser = await prismaClient.user.findUnique({ where: { id: session.user.userId } });
		if (dbuser) {
			user.userRole = dbuser.role;
			user.name = dbuser.name ;
		}
	}
	return user
};
