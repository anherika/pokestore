const Contacto = () => {
	return (
		<section
			style={{
				padding: "2rem",
				maxWidth: "700px",
				margin: "0 auto",
				textAlign: "center",
				background: "#fff0f6",
				borderRadius: "12px",
				border: "2px dashed #fbcfe8",
			}}
		>
			<h1 style={{ color: "#db2777", marginBottom: "1rem" }}>Contáctanos</h1>
			<p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
				<b>PokeSearch</b> nació como una iniciativa comunitaria creada por
				entrenadores para entrenadores. Nuestro objetivo es facilitar la
				construcción de equipos competitivos, compartir información útil y
				fortalecer la comunidad de fans de Pokémon.
			</p>
			<p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
				Este proyecto se desarrolló por una entrega de CoderHouse, pero
				con la intención de ofrecer una herramienta con valor real para quienes
				disfrutan del universo Pokémon.
			</p>
			<p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
				Si tienes dudas, sugerencias o simplemente quieres ponerte en contacto,
				puedes escribirnos a: <br />
				<a
					href="mailto:anherikaplay@gmail.com"
					style={{ color: "#ec4899", fontWeight: "600" }}
				>
					anherikaplay@gmail.com
				</a>
			</p>
			<p style={{ fontStyle: "italic" }}>
				También puedes seguir nuestras redes sociales para más actualizaciones nwn.
			</p>
		</section>
	);
};

export default Contacto;
