// type AgesType = {
// 	[name: string]: number;
// };

type NamesType = 'Fernando' | 'Andres' | 'Baby Fer' | 'Andres Fernando';
type AgesType = Record<NamesType, number>;

const ages: AgesType = {
	Fernando: 21,
	Andres: 25,
	'Baby Fer': 5,
	'Andres Fernando': 30,
};

console.log(ages);
