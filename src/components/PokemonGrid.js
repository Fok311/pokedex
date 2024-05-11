import React from "react";

function PokemonGrid(props) {
    const { pokemons, isLoading, isError } = props;
    /* INSTRUCTION: add a loading message when isLoading is true */
    if (isLoading) {
        return <div>Loading...</div>;
    }

    /* INSTRUCTION: add an error message when isError is true */
    if (isError) {
        return <div>Error: Failed to fetch Pokémon data.</div>;
    }

    return (
        <div className="pokemon-grid">
            {/* INSTRUCTION: if pokemons data is available, display the pokemons in a 3-columns grid. if not, display a "No pokemons found." message */}
            {pokemons.length > 0 ? (
                pokemons.map(pokemon => (
                    <div key={pokemon.name} className="pokemon-card">
                        <h3>{pokemon.name}</h3>
                        <text>Type: {pokemon.type}</text>
                        <div style={{ marginTop: '10px' }}>
                            <text>Level: {pokemon.level}</text>
                        </div>
                    </div>  
                ))
            ) : (
                <div>No pokemons found.</div>
            )}
        </div>
    );
}

export default PokemonGrid;
