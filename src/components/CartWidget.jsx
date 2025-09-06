const CartWidget = ({ count = 3 }) => {
  return (
    <button className="cart-btn" aria-label="Carrito">
      <img
        src="/pokedex.svg"
        alt="Carrito Pokedex"
        style={{ width: 20, height: 20, objectFit: "contain" }}
      />
      <span className="cart-badge">{count}</span>
    </button>
  )
}

export default CartWidget