const {  httpClient  } = require('../plugins');

export const getPokemonById = async (id: number): Promise<string> =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // return fetch( url )
    //     .then( (resp) => resp.json() )
    //     .then( (pokemon) => pokemon.name );

    const pokemon = await httpClient.get( url )

    return pokemon.name;
}
