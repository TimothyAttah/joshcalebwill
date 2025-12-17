import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: await bcrypt.hash('123456', 12),
		role: 'admin',
		isAdmin: true,
	},
	{
		name: 'John Doe',
		email: 'john@example.com',
		password: await bcrypt.hash('123456', 12),
		role: 'user',
	
	},
	{
		name: 'Jane Doe',
		email: 'jane@example.com',
		password: await bcrypt.hash('123456', 12),
		role: 'user',
	
	},
];

export default users;
