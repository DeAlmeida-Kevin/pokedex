import "./App.css";
import NavBar from "./components/NavBar";
import "./components/PKcard.css";
import PokemonCard from "./components/PokemonCards";
import { useState } from "react";


const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
		imgSrc: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png",
	}
];

function App() {
	const [pokemonName, setPokemonName] = useState("bulbasaur");
	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("Invalid pokemon name");
	}

	return (
		<div>
			<NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
			<PokemonCard pokemons={pokemon} />
		</div>
	);
}

export default App;