import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);
	const { itemId } = useParams();

	useEffect(() => {
		getProductById(itemId).then((res) => setProduct(res));
	}, [itemId]);

	return (
		<section style={{ padding: "2rem" }}>
			{product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
		</section>
	);
};

export default ItemDetailContainer;
