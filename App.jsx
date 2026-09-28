import React, { useState } from "react";

// Static list of a few Pokémon with official artwork URLs
const INITIAL_POKEMONS = [
  { name: "Bulbasaur", id: 1 },
  { name: "Charmander", id: 4 },
  { name: "Squirtle", id: 7 },
  { name: "Pikachu", id: 25 },
  { name: "Jigglypuff", id: 39 },
  { name: "Meowth", id: 52 },
];

// Helper to build artwork URL from Pokémon ID
const getArtworkUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

// Simple Fisher‑Yates shuffle
const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export default function App() {
  const [pokemons, setPokemons] = useState(INITIAL_POKEMONS);

  const handleShuffle = () => {
    setPokemons(shuffleArray(pokemons));
  };

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#FFEB3B", // bright yellow
    padding: "1rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    width: "100%",
    maxWidth: "800px",
  };

  const cardStyle = {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: "8px",
    padding: "0.5rem",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  };

  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#FFCA28",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Welcome to the Cute Pikachu Site!</h1>
        <img
          src={getArtworkUrl(25)}
          alt="Pikachu smiling"
          width={200}
          height={200}
          loading="lazy"
        />
        <p>Explore some of our favorite Pokémon.</p>
        <button
          onClick={handleShuffle}
          style={buttonStyle}
          aria-label="Shuffle Pokémon list"
        >
          Shuffle Pokémon
        </button>
      </header>
      <section style={gridStyle} aria-label="Pokémon list">
        {pokemons.map((p) => (
          <article key={p.id} style={cardStyle}>
            <img
              src={getArtworkUrl(p.id)}
              alt={p.name}
              width={120}
              height={120}
              loading="lazy"
            />
            <h2>{p.name}</h2>
          </article>
        ))}
      </section>
    </div>
  );
}
