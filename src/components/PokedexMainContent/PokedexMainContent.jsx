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
  const [PokemonDB, PokemonDBLength] = useFetch(false)
  const [displayPokemons, setDisplayPokemons] = useState([])
  const [displayPokemonsSearched, setDisplaySearch] = useState([])
  const [loading, setLoading] = useState(true)
  const skeletonLength = isSmallDisplay ? 6 : 12
  const { GetLikeById } = useLike()
  const isMounted = useRef(true)
  const isSearching = useRef(false)
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
    setLoading(false)
  }

  function findWhat(nameToFind, value) {
    setLoading(true)
    setDisplaySearch([])
      ; (async () => {
        await PokemonDB.forEach(({ id, name, type, img }) => {
          if (
            (nameToFind === "name" && name.match(value)) ||
            (nameToFind === "type" &&
              (type[0].match(value) || (type[1] && type[1].match(value)))) ||
            (nameToFind === "number" && id.match(value))
          ) {
            setDisplaySearch((d) => [
              ...d,
              <PokemonCard
                id={id}
                firstType={type[0] || ""}
                secondType={type[1] || ""}
                name={name}
                image={img}
                key={id + Math.random()}
                isLiked={GetLikeById(id)}
              />
            ])
          }
        })
      })()
    setLoading(false)
  }

  function onFetchBy(names, value) {
    isSearching.current = true
    if (names === "findByName" && value !== "") {
      findWhat("name", value)
    } else if (names === "findByNumber") {
      isSearching.current = true
      findWhat("number", value)
    } else if (names === "findByType") {
      isSearching.current = true
      findWhat("type", value)
    } else {
      isSearching.current = false
      handleFetch()
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
    console.log("new render !")
    if (isMounted.current) handleFetch()
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <>
      <SearchBars onFetchBy={onFetchBy} />
      <ScrollToTop showBellow={isSmallDisplay ? 510 : 350} />

      {isSearching.current ? (
        <Grid
          container
          spacing={4}
          className={classes.root}
          justifyContent="center"
          key="rootGrid2"
        >
          {loading ? "searching..." : displayPokemonsSearched}
        </Grid>
      ) : (
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
            {loading ? "searching...." : displayPokemons}
          </Grid>
        </InfiniteScroll>
      )}
    </>
  )
}

export default PokedexMainContent
