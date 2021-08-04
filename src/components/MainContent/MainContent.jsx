import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard/PokemonCard"
import PokemonsList from "../../data/pokemons.json"
import useStyles from "./style"
import PokemonSkeleton from "./PokemonSkeleton/PokemonSkeleton"

function MainContent() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const skeletonLength = isSmallDisplay ? 6 : 12
  useEffect(() => {
    if (PokemonsList.length) {
      setPokemons(PokemonsList)
      setLoading(false)
    }
  }, [pokemons])
  return (
    <Grid
      container
      spacing={isSmallDisplay ? 0 : 4}
      className={classes.root}
      justifyContent="center"
    >
      {loading &&
        Array.from({ length: skeletonLength }, () => (
          <Grid item key={Math.random()}>
            <PokemonSkeleton />
          </Grid>
        ))}
      {!loading &&
        pokemons.map(({ name, id, type }) => (
          <Grid item key={`${name}${id}`}>
            <PokemonCard firstType={type[0] || ""} secondType={type[1] || ""} />
          </Grid>
        ))}
    </Grid>
  )
}

export default MainContent
