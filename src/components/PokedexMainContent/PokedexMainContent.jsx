import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroller"
import UseFetch from "../hooks/UseFetch"
import PokemonSkeleton from "../tools/PokemonSkeleton/PokemonSkeleton"
import useStyles from "./styles"
import ScrollToTop from "../tools/ScrollToTop/ScrollToTop"

function PokedexMainContent() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  const skeletonLength = isSmallDisplay ? 6 : 12
  const [displayPokemons, handleFetch, DBmaxLength] = UseFetch(skeletonLength)
  const displaySkeleton = [
    <Grid
      container
      spacing={4}
      className={classes.root}
      justifyContent="center"
      key="rootGrid2"
    >
      {Array.from({ length: skeletonLength }, () => (
        <Grid item key={`loading${Math.random()}`}>
          <PokemonSkeleton />
        </Grid>
      ))}
    </Grid>
  ]

  useEffect(() => {
    handleFetch(skeletonLength)
  }, [])

  return (
    <InfiniteScroll
      threshold={800}
      pageStart={0}
      hasMore={displayPokemons.length < DBmaxLength}
      loadMore={() => handleFetch(skeletonLength)}
      loader={displaySkeleton}
    >
      <ScrollToTop showBellow={isSmallDisplay ? 510 : 350} />
      <Grid
        container
        spacing={4}
        className={classes.root}
        justifyContent="center"
        key="rootGrid2"
      >
        {displayPokemons}
      </Grid>
    </InfiniteScroll>
  )
}

export default PokedexMainContent

