
interface Pkmninterface {
    pokemon: {
        name: string,
        imgSrc: string,
    }
}

function PokemonCard({ pokemon: { name, imgSrc } }: Pkmninterface) {

    return (
        <figure>
            {(imgSrc) ? <img src={imgSrc} /> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default PokemonCard;