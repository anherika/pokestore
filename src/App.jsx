import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <ItemListContainer greeting="Explora nuestra tienda con la Pokédex completa" />
        <p style={{ color: "#6b7280" }}>Hola pronto podrás ver el catálogo de cartas aquí n_n</p>
      </main>
    </>
  )
}

export default App