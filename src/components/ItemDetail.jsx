import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
	return (
		<div
			style={{
				border: "2px dashed #f472b6",
				padding: "2rem",
				borderRadius: "12px",
				backgroundColor: "#fff0f6",
				textAlign: "center",
			}}
		>
			<h2 style={{ color: "#db2777" }}>{product.name} ✨</h2>
			<p style={{ fontSize: "1.2rem" }}>Precio: ${product.price}</p>
			<p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
				¡Haz click en agregar si quieres atraparlo!
			</p>
			<ItemCount />
		</div>
	);
};

export default ItemDetail;
