import prisma from '../../db.js';

async function deleteAllRecords() {
	await prisma.user.deleteMany({});
}

deleteAllRecords()
	.then(() => console.log('All records deleted'))
	.catch((error) => console.error(error));
