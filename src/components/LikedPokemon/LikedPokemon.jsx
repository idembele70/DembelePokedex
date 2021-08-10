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
  const [PokemonDB] = useFetch()
  const { GetAllLiked, GetLikeById } = useLike()
  const LikeDB = GetAllLiked()
  const [displayPokemons, setDisplayPokemons] = useState([])
  const isMount = useRef(true)
  const handleFetch = () => {
    if (PokemonDB && PokemonDB.length) {
      PokemonDB.forEach(
        ({ id, name, type, img }) =>
          LikeDB.includes(id) &&
          setDisplayPokemons((dt) => [
            ...dt,
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
          ])
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
      {Array.from({ length: LikeDB.length }, () => (
        <Grid item key={`loading${Math.random()}`}>
          <PokemonSkeleton />
        </Grid>
      ))}
    </Grid>
  ]
  useEffect(() => {
    if (isMount.current) handleFetch()
    return () => {
      isMount.current = false
    }
  })
  return (
    <>
      <ScrollToTop showBellow={isSmallDisplay ? 510 : 350} />
      <InfiniteScroll
        pageStart={0}
        hasMore={displayPokemons.length < LikeDB.length}
        loadMore={() => {
          if (isMount.current) handleFetch()
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

