
interface Pkmninterface {
    pokemon: {
        name: string,
        imgSrc: string,
    }
}

function PokemonCard({ pokemon: { name, imgSrc } }: Pkmninterface) {

    return (
        <figure className={`card card--${name.toLowerCase()}`}>
            {(imgSrc) ? <img src={imgSrc} className="card-img" /> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default PokemonCard;