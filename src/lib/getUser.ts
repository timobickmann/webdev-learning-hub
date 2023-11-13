import { prismaClient } from '$lib/server/prisma';

export const getUser = async (locals: App.Locals) => {
	const user = { username: 'Guest', userRole: 'guest' };
	const session = await locals.auth.validate();
	if (session) {
		const dbuser = await prismaClient.user.findUnique({ where: { id: session.user.userId } });
		if (dbuser) {
			user.userRole = dbuser.role;
			user.username = dbuser.name ;
		}
	}
	return user
};
