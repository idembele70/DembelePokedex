import React, { useEffect, useState } from "react"
import useLike from "./useLike"

function useFetch(getLiked) {
  const [pokemonsList, setPokemonsList] = useState([])
  const { GetAllLiked } = useLike()
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const response = await fetch("data/pokemons.json", {
        signal: controller.signal
      })
      const json = await response.json()
      if (getLiked) {
        const data = await json.filter(({ id }) => GetAllLiked().includes(id))
        setPokemonsList(data)
      } else setPokemonsList(json)
    })()
    return () => {
      controller.abort()
    }
  }, [])

  return [pokemonsList, pokemonsList.length]
}

export default useFetch
