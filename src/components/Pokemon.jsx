import React, { useState } from 'react';

const Pokemon = () => {
    // create state variable to store all pokemon
    let [ pokemonList, setPokemonList ] = useState([]);

    const getPokemon = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then( response =>{
            console.log('json created')
            return response.json()
        })
        .then( response=>{
            console.log('setPokemonList success', response)
            setPokemonList(response.results)
        })
        .catch( error=>{
            console.log("something went wrong")
        })
    }

    return(
        <div>
            <button onClick={getPokemon}>Catch em all</button>
            <hr />
            {
                pokemonList.map( (pokemon, i) => {
                    return(
                        <p key={i}>Pokemon No.{i}: {pokemon.name}</p>
                    )
                })
            }
        </div>
    )
}

export default Pokemon;