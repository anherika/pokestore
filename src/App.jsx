import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto"; // 👈 importa el nuevo componente

function App() {
	return (
		<>
			<NavBar />
			<main className="container">
				<Routes>
					{/* Catálogo completo */}
					<Route
						path="/"
						element={
							<ItemListContainer greeting="Explora nuestra tienda de artículos Pokémon" />
						}
					/>
					{/* Catálogo filtrado por categoría */}
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					{/* Detalle de producto */}
					<Route path="/item/:itemId" element={<ItemDetailContainer />} />
					{/* Contacto */}
					<Route path="/contacto" element={<Contacto />} />{" "}
					{/* 👈 nueva ruta */}
					{/* Página 404 */}
					<Route path="*" element={<h2>404 - Página no encontrada</h2>} />
				</Routes>
			</main>
		</>
	);
}

export default App;
