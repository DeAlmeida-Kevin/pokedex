interface PokemonType {
	pokemons: {
		name: string;
		imgSrc?: string;
	};
}

function PokemonCard({ pokemons }: PokemonType) {
	return pokemons.imgSrc !== undefined ? (
		<figure>
			<img
				src={pokemons.imgSrc}
				className={`card card--${pokemons.name}`}
				alt="My first pokemon Bulbasaur"
			/>
			<figcaption>{pokemons.name}</figcaption>
		</figure>
	) : (
		<p>???</p>
	);
}

export default PokemonCard;
