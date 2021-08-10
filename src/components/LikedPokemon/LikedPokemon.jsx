import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useEffect, useRef, useState, useCallback } from "react"
import InfiniteScroll from "react-infinite-scroller"
import useFetch from "../hooks/useFetch"
import { PokemonSkeleton, PokemonCard } from "../tools"
import useStyles from "./styles"
import useLike from "../hooks/useLike"
import ScrollToTop from "../tools/ScrollToTop/ScrollToTop"

function LikedPokemon() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  const skeletonLength = isSmallDisplay ? 6 : 12
  const [PokemonDB] = useFetch(true)
  const { GetAllLiked, GetLikeById } = useLike()
  const LikeDB = GetAllLiked()
  const [displayPokemons, setDisplayPokemons] = useState([])
  const isMount = useRef(true)
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
              <PokemonCard
                id={id}
                firstType={type[0] || ""}
                secondType={type[1] || ""}
                name={name}
                image={img}
                key={id + Math.random()}
                isLiked={GetLikeById(id)}
              />
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
      {Array.from(
        {
          length:
            skeletonLength > LikeDB.length ? LikeDB.length : skeletonLength
        },
        () => (
          <Grid item key={`loading${Math.random()}`}>
            <PokemonSkeleton />
          </Grid>
        )
      )}
    </Grid>
  ]
  useEffect(() => {
    if (isMount.current) {
      handleFetch()
    }
    return () => {
      isMount.current = false
    }
  }, [])
  return (
    <>
      <ScrollToTop showBellow={isSmallDisplay ? 510 : 350} />
      <InfiniteScroll
        threshold={800}
        pageStart={0}
        hasMore={displayPokemons.length < LikeDB.length}
        loadMore={() => {
          if (isSmallDisplay) handleFetch(true)
          if (isMount.current) handleFetch(true)
        }}
        loader={displaySkeleton}
      >
        <Grid
          container
          spacing={4}
          className={classes.root}
          justifyContent="center"
          key="rootGrid1"
        >
          {displayPokemons}
        </Grid>
      </InfiniteScroll>
    </>
  )
}

export default LikedPokemon
