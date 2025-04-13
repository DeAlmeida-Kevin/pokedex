interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonName: (name: string) => void;
	pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
	function handleClick(pokemonName) {
		if (pokemonName === "pikachu") {
			alert("pika pikachu !!!");
		}
		setPokemonName(pokemonName);
	}

	return (
		<nav>
			{pokemonList.map((pokemons, index) => (
				<button
					key={index}
					type="button"
					onClick={() => handleClick(pokemons.name)}
				>
					{pokemons.name}
				</button>
			))}
		</nav>
	);
}

export default NavBar;
