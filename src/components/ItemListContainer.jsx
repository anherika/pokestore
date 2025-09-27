import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
	const [items, setItems] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const fetchData = categoryId
			? getProductsByCategory(categoryId)
			: getProducts();
		fetchData.then((res) => setItems(res));
	}, [categoryId]);

	return (
		<section style={{ padding: "2rem" }}>
			<h1>{greeting}</h1>
			<ItemList items={items} />
		</section>
	);
};

export default ItemListContainer;
