type Box<T = string> = {
	name: string;
	content: T;
};

const stringBox: Box = {
	name: 'A String Box',
	content: 'A String',
};

const numberBox: Box<number> = {
	name: 'A String Box',
	content: 50,
};

console.log(stringBox.content.toUpperCase());
console.log(numberBox.content * 5);
