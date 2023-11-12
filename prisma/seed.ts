import prismaClient from '$lib/server/prisma';

async function main() {
	await prismaClient.todo.createMany({
		data: [
			{
				title: 'Todo',
				status: 'todo'
			},
			{
				title: 'Doing',
				status: 'doing'
			},
			{
				title: 'Done',
				status: 'done'
			}
		]
	});
}

main()
	.then(async () => {
		await prismaClient.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
