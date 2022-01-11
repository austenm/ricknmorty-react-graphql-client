import React, { useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!){
  characters(filter: {
    name: $name
  }) {
    results {
      location{
        name
      }
    }
  }
}
`

export default function Search() {
    const [name, setName] = useState("")
    const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })

    console.log({
        called,
        loading,
        error,
        data
    });

    return (
        <div>
            <h2>
                Enter a character's name to see their locations in the Rick and Morty Universe
            </h2>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>
            {loading && <div>spinner</div>}
            {error && <div>Something went wrong!</div>}
            {data && (
                <ul>
                    {data.characters.results.map(character => <li key={character.name}>{character.location.name}</li>)}
                </ul>
            )}
        </div>
    )
}
