type User = {
	name: string;
	age: number;
	profession?: string;
};

const user: User = {
	name: 'Fernando',
	age: 27,
	profession: 'Engineer',
};

const output: string = user.profession!;

console.log(output);
