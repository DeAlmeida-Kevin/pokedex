
interface Pkmninterface {
    pokemon: {
        name: string,
        imgSrc: string,
    }
}

function PokemonCard({ pokemon }: Pkmninterface) {

    return (
        <figure>
            {(pokemon.imgSrc) ? <img src={pokemon.imgSrc} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}

export default PokemonCard;