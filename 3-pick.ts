type Item = {
	name: string;
	description: string;
	price: number;
	currency: string;
	image: string;
};

type ItemPreview = Pick<Item, 'name' | 'image'>;

const item: Item = {
	name: 'Macbook',
	description: 'Macbook Pro 2019',
	price: 3923,
	currency: 'USD',
	image: 'https://cdn.apple.com/mbpro.png',
};

const itemPreview: ItemPreview = {
	name: item.name,
	image: item.image,
};

console.log(itemPreview);

console.log(item);
