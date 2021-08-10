import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useEffect, useState, useRef } from "react"
import InfiniteScroll from "react-infinite-scroller"
import UseFetch from "../hooks/UseFetch"
import PokemonSkeleton from "../tools/PokemonSkeleton/PokemonSkeleton"
import useStyles from "./styles"
import ScrollToTop from "../tools/ScrollToTop/ScrollToTop"
import UseLike from "../hooks/UseLike"
import { PokemonCard } from "../tools"

function PokedexMainContent() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  const [displayPokemons, setDisplayPokemons] = useState([])
  const skeletonLength = isSmallDisplay ? 6 : 12
  const [PokemonDB, PokemonDBLength] = UseFetch()
  const { GetLikeById } = UseLike()
  const isMounted = useRef(false)
  function handleFetch() {
    let maxLength = 0
    if (displayPokemons.length + skeletonLength < PokemonDB.length)
      maxLength = displayPokemons.length + skeletonLength
    else
      maxLength =
        displayPokemons.length + (PokemonDB.length - displayPokemons.length)
    if (PokemonDB && PokemonDB.length) {
      const newData = PokemonDB.slice(displayPokemons.length, maxLength)
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
                  isLiked={GetLikeById(id)}
                />
              </Grid>
            ))
          ]
          : [...newData]
      )
    }
  }
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
    isMounted.current = true
    if (isMounted.current) handleFetch()
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <>
      <ScrollToTop showBellow={isSmallDisplay ? 510 : 350} />
      <InfiniteScroll
        threshold={800}
        pageStart={0}
        hasMore={displayPokemons.length < PokemonDBLength}
        loadMore={() => isMounted.current && handleFetch()}
        loader={displaySkeleton}
      >
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
    </>
  )
}

export default PokedexMainContent
