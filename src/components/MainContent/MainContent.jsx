import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard/PokemonCard"
import PokemonsList from "../../data/pokemons.json"
import useStyles from "./style"

function MainContent() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    if (PokemonsList.length) setPokemons(PokemonsList)
  }, [pokemons])
  return (
    <Grid
      container
      spacing={isSmallDisplay ? 0 : 4}
      className={classes.root}
      justifyContent="center"
    >
      {pokemons.map(({ name, id, type }) => (
        <Grid item key={`${name}${id}`}>
          <PokemonCard firstType={type[0]} secondType={type[1]} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MainContent
