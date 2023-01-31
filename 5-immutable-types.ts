type User = {
	readonly name: string;
	readonly age: number;
	readonly education: {
		readonly degree: string;
	};
	// skills: Readonly<string[]>;
	skills: ReadonlyArray<string>;
};

const user: User = {
	name: 'Fernando',
	age: 26,
	education: {
		degree: 'Bachelor',
	},
	skills: ['Javascript', 'Typescript'],
};

// user = {};
user.name = 'Andres';
user.education.degree = 'IT';
user.education = {
	degree: 'IT',
};

user.age = 31;

user.skills = ['Go'];

user.skills.push('HTML');

console.log(user);
