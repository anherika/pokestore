export const products = [
	{ id: 1, name: "Camisa Pikachu ", category: "ropa", price: 500 },
	{ id: 2, name: "Gorra Charizard ", category: "accesorios", price: 300 },
	{ id: 3, name: "Mochila Pokeball ", category: "accesorios", price: 800 },
	{ id: 4, name: "Sudadera Eevee ", category: "ropa", price: 650 },
	{ id: 5, name: "Sombrero Snorlax ", category: "accesorios", price: 400 },
	{ id: 6, name: "Chamarra Team Rocket", category: "ropa", price: 900 },
	{ id: 7, name: "Playera Bulbasaur ", category: "ropa", price: 450 },
	{ id: 8, name: "Collar Jigglypuff ", category: "accesorios", price: 350 },
	{ id: 9, name: "Pulsera Togepi ", category: "accesorios", price: 250 },
	{ id: 10, name: "Tenis Squirtle ", category: "ropa", price: 1200 },
	{ id: 11, name: "Bufanda Charmander ", category: "ropa", price: 550 },
	{ id: 12, name: "Bolsa Mimikyu ", category: "accesorios", price: 700 },
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(products), 1000);
	});
};

export const getProductById = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(products.find((p) => p.id === Number(id))), 1000);
	});
};

export const getProductsByCategory = (categoryId) => {
	return new Promise((resolve) => {
		setTimeout(
			() => resolve(products.filter((p) => p.category === categoryId)),
			1000
		);
	});
};
