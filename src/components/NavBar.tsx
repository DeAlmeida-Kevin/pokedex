interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {

    return <nav>
        {pokemonList.map((pokemons, index) => (
            <button key={index} type="button" onClick={() => setPokemonName(pokemons.name)}>{pokemons.name}</button>
        ))}
    </nav>;
}

export default NavBar;