import Item from "./Item";

const ItemList = ({ items }) => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "1rem",
				padding: "1rem",
			}}
		>
			{items.map((prod) => (
				<Item key={prod.id} product={prod} />
			))}
		</div>
	);
};

export default ItemList;
