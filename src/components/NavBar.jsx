import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<header
			className="navbar"
			style={{ background: "#ffe4f1", padding: "0.5rem" }}
		>
			<div className="left">
				<Link
					to="/"
					className="brand"
					style={{ textDecoration: "none", color: "#db2777" }}
				>
					<img
						src={import.meta.env.BASE_URL + "pokefind-logo.png"}
						alt="PokeFind Logo"
						style={{ width: 40, height: 40, objectFit: "contain" }}
					/>
					<span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
						🌸 PokeSearcher Store uwu 🌸
					</span>
				</Link>
			</div>

			<nav className="center">
				<ul
					className="navList"
					style={{ display: "flex", listStyle: "none", gap: "1rem" }}
				>
					<li>
						<Link to="/">🏠 Inicio</Link>
					</li>
					<li>
						<Link to="/category/ropa">👕 Ropita owo</Link>
					</li>
					<li>
						<Link to="/category/accesorios">🎒 Accesorios uwu</Link>
					</li>
					<li>
						<Link to="/contacto">💌 Contactito ewe</Link>
					</li>
				</ul>
			</nav>

			<div className="right">
				<CartWidget count={3} />
			</div>
		</header>
	);
};

export default NavBar;
