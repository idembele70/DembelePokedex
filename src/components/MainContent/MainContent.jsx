import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import React from "react"
import PokemonCard from "./PokemonCard/PokemonCard"
import useStyles from "./style"

function MainContent() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <Grid
      container
      spacing={isSmallDisplay ? 0 : 4}
      className={classes.root}
      justifyContent="center"
    >
      <Grid item>
        <PokemonCard />
      </Grid>
      <Grid item>
        <PokemonCard />
      </Grid>
      <Grid item>
        <PokemonCard />
      </Grid>
      <Grid item>
        <PokemonCard />
      </Grid>
      <Grid item>
        <PokemonCard />
      </Grid>
    </Grid>
  )
}

export default MainContent
