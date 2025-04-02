import "./App.css"
import PokemonCard from "./components/PokemonCards";
import { useState } from "react";


const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
	},
];

function App() {

	const [pokemonName, setPokemonName] = useState("bulbasaur");

	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("Invalid pokemon name");
	}


	return (
		<div>
			<PokemonCard pokemon={pokemon} />
			<button type="button" onClick={() => setPokemonName("bulbasaur")}>
				bulbasaur
			</button>
			<button type="button" onClick={() => setPokemonName("mew")}>
				Mew
			</button>
		</div >
	);
}

export default App;
