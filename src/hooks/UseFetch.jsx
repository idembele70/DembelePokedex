import React, { useEffect, useState } from "react"
import { Grid } from "@material-ui/core"
import PokemonCard from "../components/PokedexMainContent/PokemonCard/PokemonCard"

function useFetch(startLength) {
  const [pokemonsList, setPokemonsList] = useState([])
  const [displayPokemons, setDisplayPokemons] = useState([])

  function onFetch(skeletonLength) {
    let maxLength = 0
    if (displayPokemons.length + skeletonLength < pokemonsList.length)
      maxLength = displayPokemons.length + skeletonLength
    else
      maxLength =
        displayPokemons.length + (pokemonsList.length - displayPokemons.length)
    if (pokemonsList && pokemonsList.length) {
      const newData = pokemonsList.slice(displayPokemons.length, maxLength)
      setDisplayPokemons((oldData) =>
        oldData
          ? [
            ...oldData,
            ...newData.map(({ id, name, type, img }) => (
              <Grid item key={id}>
                <PokemonCard
                  id={id}
                  firstType={type[0] || ""}
                  secondType={type[1] || ""}
                  name={name}
                  image={img}
                  key={id + Math.random()}
                  isLiked={false}
                />
              </Grid>
            ))
          ]
          : [...newData]
      )
    }
  }

  useEffect(() => {
    ; (async () => {
      const response = await fetch("data/pokemons.json")
      const json = await response.json()
      setPokemonsList(json)
      if (pokemonsList && pokemonsList.length) {
        onFetch(startLength)
      }
    })()
  }, [])

  return [displayPokemons, onFetch, pokemonsList.length]
}

export default useFetch

