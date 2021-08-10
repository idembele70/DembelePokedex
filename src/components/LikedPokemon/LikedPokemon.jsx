import { useMediaQuery, Grid, useTheme, } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { PokemonSkeleton } from "../tools"
import useStyles from "./styles"
import { GetAllLiked } from "../../services"

function LikedPokemon() {
  const [loading, setLoading] = useState(true)
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  const skeletonLength = isSmallDisplay ? 6 : 12
  useEffect(() => {

  }, [])
  return (
    <Grid
      container
      spacing={4}
      className={classes.root}
      justifyContent="center"
    >
      {loading &&
        Array.from({ length: skeletonLength }, () => (
          <Grid item key={`loading${Math.random()}`}>
            <PokemonSkeleton />
          </Grid>
        ))}
    </Grid>
  )
}

export default LikedPokemon

