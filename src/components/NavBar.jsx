import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="left">
        <a href="/" className="brand">
          <img
            src="/pokefind-logo.png"
            alt="PokeFind Logo"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
          <span>PokeSearcher Store</span>
        </a>
      </div>

      <nav className="center">
        <ul className="navList">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      <div className="right">
        <CartWidget count={3} />
      </div>
    </header>
  )
}

export default NavBar