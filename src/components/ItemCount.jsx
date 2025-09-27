import { useState } from "react";

const ItemCount = () => {
	const [count, setCount] = useState(1);

	return (
		<div style={{ marginTop: "1rem" }}>
			<button onClick={() => setCount(count - 1)} disabled={count <= 1}>
				➖
			</button>
			<span style={{ margin: "0 1rem", fontWeight: "bold" }}>{count} Poke-item</span>
			<button onClick={() => setCount(count + 1)}>➕</button>
			<button
				style={{
					marginLeft: "1rem",
					padding: "0.5rem 1rem",
					background: "#f472b6",
					border: "none",
					borderRadius: "6px",
					color: "white",
					cursor: "pointer",
				}}
			>
				✨ Agregar al carrito ✨
			</button>
		</div>
	);
};

export default ItemCount;
