type Item = {
	name: string;
	description: string;
	price: number;
	currency: string;
};

type ItemPriceless = Omit<Item, 'price' | 'currency'>;

const item: ItemPriceless = {
	name: 'Laptop Bag',
	description: 'Leather bag for laptop',
};

console.log(item);
