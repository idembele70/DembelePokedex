import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useEffect, useRef, useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import useFetch from "../hooks/useFetch"
import useLike from "../hooks/useLike"
import SearchBars from "../SearchBars/SearchBars"
import { PokemonCard } from "../tools"
import PokemonSkeleton from "../tools/PokemonSkeleton/PokemonSkeleton"
import ScrollToTop from "../tools/ScrollToTop/ScrollToTop"
import useStyles from "./styles"

function PokedexMainContent() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  const [PokemonDB, PokemonDBLength] = useFetch()
  const [displayPokemons, setDisplayPokemons] = useState([])
  const skeletonLength = isSmallDisplay ? 6 : 12
  const { GetLikeById } = useLike()
  const isMounted = useRef(true)
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

  function onFetchBy(name, value) {
    if (name === "findByName") {
      console.log("Name")
    } else if (name === "findByNumber") {
      console.log("Number")
    } else if (name === "findByType") {
      console.log("Type")
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
    if (isMounted.current) handleFetch()
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <>
      <SearchBars onFetchBy={onFetchBy} />
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
