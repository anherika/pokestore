const ItemListContainer = ({ greeting }) => {
  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>{greeting}</h1>
      <p style={styles.p}>Hola pronto podrás ver el catálogo de cartas aqui n_n</p>
    </section>
  )
}

const styles = {
  section: { padding: "2rem", textAlign: "center" },
  h1: { margin: 0, fontSize: "1.5rem" },
  p: { marginTop: "0.5rem", color: "#666" }
}

export default ItemListContainer
