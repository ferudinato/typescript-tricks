const user = {
	name: 'Fernando',
	age: 30,
};

type User = typeof user;

const user2: User = {
	age: 28,
	name: 'Andres',
};

console.log(user);
console.log(user2);
