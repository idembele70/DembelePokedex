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
  const [pokemonsSearched, setPokemonsSearched] = useState([])
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

  function handleFetchSearch() {
    let maxLength = 0
    if (displayPokemons.length + skeletonLength < pokemonsSearched.length)
      maxLength = displayPokemons.length + skeletonLength
    else
      maxLength =
        displayPokemons.length +
        (pokemonsSearched.length - displayPokemons.length)
    if (pokemonsSearched && pokemonsSearched.length) {
      const newData = pokemonsSearched.slice(displayPokemons.length, maxLength)
      setDisplayPokemons((oldData) =>
        oldData ? [...oldData, ...newData] : [...newData]
      )
    }
  }

  function findWhat(nameToFind, value) {
    setPokemonsSearched([])
    setDisplayPokemons([])
      ; (async () => {
        await PokemonDB.forEach(({ id, name, type, img }) => {
          if (
            (nameToFind.match("name") && name.match(value)) ||
            (nameToFind.match(new RegExp("type", "ig")) &&
              type.includes(value)) ||
            (nameToFind.match("number") && id.match(value))
          ) {
            setPokemonsSearched((d) => [
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
          } else if (nameToFind && !value) {
            setPokemonsSearched([])
          }
        })
      })()
  }
  function onFetchBy(names, value) {
    if (names === "findByName" && value !== "") {
      findWhat("name", value)
    } else if (names === "findByNumber") {
      findWhat("number", value)
    } else if (names === "findByType") {
      findWhat("type", value)
    } else {
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
    if (isMounted.current) {
      handleFetch()
    }
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
        hasMore={
          pokemonsSearched.length
            ? displayPokemons.length < pokemonsSearched.length
            : displayPokemons.length < PokemonDBLength
        }
        loadMore={() => {
          if (pokemonsSearched.length) handleFetchSearch()
          else if (isMounted.current) handleFetch()
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

export default PokedexMainContent

