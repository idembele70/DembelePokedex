import React, { useEffect, useState } from "react"

function useFetch() {
  const [pokemonsList, setPokemonsList] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      const response = await fetch("data/pokemons.json", {
        signal: controller.signal
      })
      const json = await response.json()
      setPokemonsList(json)
    })()
    return () => {
      controller.abort()
    }
  }, [])

  return [pokemonsList, pokemonsList.length]
}

export default useFetch
