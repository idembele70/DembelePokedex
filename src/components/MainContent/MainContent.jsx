import { Grid } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroller"
import PokemonsDB from "../../data/pokemons.json"
import PokemonCard from "./PokemonCard/PokemonCard"
import useStyles from "./styles"
import PokemonSkeleton from "./PokemonSkeleton/PokemonSkeleton"

function MainContent() {
  const classes = useStyles()
  const [displayPokemons, setDisplayPokemons] = useState([])
  function handleFetch() {
    if (displayPokemons.length + 12 < PokemonsDB.length) {
      const max = displayPokemons.length + 12
      setDisplayPokemons((da) => [
        ...da,
        ...[
          ...PokemonsDB.filter((data, idx) => idx >= da.length && idx < max)
        ].map(({ id, name, type, img }) => (
          <Grid item key={name + Math.random()}>
            <PokemonCard
              id={id}
              firstType={type ? type[0] : ""}
              secondType={type ? type[1] : ""}
              name={name}
              image={img}
            />
          </Grid>
        ))
      ])
    } else {
      const max =
        displayPokemons.length + (PokemonsDB.length - displayPokemons.length)
      setDisplayPokemons((da) => [
        ...da,
        ...PokemonsDB.filter((data, idx) => idx >= da.length && idx < max).map(
          ({ id, name, type, img }) => (
            <Grid item key={name + Math.random()}>
              <PokemonCard
                id={id}
                firstType={type ? type[0] : ""}
                secondType={type ? type[1] : ""}
                name={name}
                image={img}
              />
            </Grid>
          )
        )
      ])
    }
  }
  useEffect(() => {
    handleFetch()
  }, [])
  return (
    <InfiniteScroll
      pageStart={0}
      hasMore={displayPokemons.length < PokemonsDB.length}
      loadMore={() => {
        console.log("LOADMORE")
        handleFetch()
      }}
      loader={
        <Grid
          container
          spacing={4}
          className={classes.root}
          justifyContent="center"
        >
          {Array.from({ length: 12 }, (v) => (
            <Grid item>
              <PokemonSkeleton key={`loading${Math.random()}`} />
            </Grid>
          ))}
        </Grid>
      }
    >
      <Grid
        container
        spacing={4}
        className={classes.root}
        justifyContent="center"
      >
        {displayPokemons}
      </Grid>
    </InfiniteScroll>
  )
}

export default MainContent


