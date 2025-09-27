import { Link } from "react-router-dom";

const Item = ({ product }) => {
	return (
		<div
			style={{
				border: "2px solid #fbcfe8",
				padding: "1rem",
				borderRadius: "12px",
				backgroundColor: "#fff0f6",
				textAlign: "center",
			}}
		>
			<h3 style={{ color: "#db2777" }}>{product.name} ✨</h3>
			<p style={{ fontWeight: "bold" }}>💖 Precio: ${product.price}</p>
			<Link
				to={`/item/${product.id}`}
				style={{
					display: "inline-block",
					marginTop: "0.5rem",
					padding: "0.5rem 1rem",
					background: "#f472b6",
					color: "white",
					borderRadius: "6px",
					textDecoration: "none",
				}}
			>
				Ver detalle owo ✨
			</Link>
		</div>
	);
};

export default Item;
