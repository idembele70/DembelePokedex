import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useState, useEffect, useCallback } from "react"
import PokemonCard from "./PokemonCard/PokemonCard"
import PokemonsList from "../../data/pokemons.json"
import useStyles from "./styles"
import PokemonSkeleton from "./PokemonSkeleton/PokemonSkeleton"
import ScrollToTop from "../tools/ScrollToTop"

function MainContent() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down("xs"))
  const [displayPokemons, setDisplayPokemons] = useState([])
  const [displaySkeleton, setDisplaySkeleton] = useState([])
  const [loading, setLoading] = useState(true)
  const [showScrollToTop, setshowScrollToTop] = useState(false)
  const [ScrollToTopMinHeight, setcrollToTop] = useState(
    isSmallDisplay ? 510 : 350
  )
  const skeletonLength = isSmallDisplay ? 6 : 12
  const onScroll = useCallback(
    (e) => {
      const { scrollTop, clientHeight, offsetHeight } =
        e.target.scrollingElement
      if (
        offsetHeight / 1.3 < scrollTop + clientHeight &&
        PokemonsList.length > displayPokemons.length
      ) {
        setLoading(true)
      }
      if (window.pageYOffset > ScrollToTopMinHeight) {
        setshowScrollToTop(true)
      } else setshowScrollToTop(false)
    },
    [ScrollToTopMinHeight, displayPokemons.length]
  )
  async function fetchPokemons(start, end) {
    setLoading(false)
    const data = await [...PokemonsList.slice(start, end)]
    return data
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    fetchPokemons(displayPokemons.length, displayPokemons.length + 12).then(
      (data) => {
        setLoading(false)
        for (let i = 0; i < skeletonLength; i += 1) {
          if (displayPokemons.length <= PokemonsList.length && data[i]) {
            const { name, id, img, type } = data[i]
            setDisplayPokemons((dt) => [
              ...dt,
              <Grid item key={name + Date.now()}>
                <PokemonCard
                  loading={false}
                  id={id}
                  firstType={type[0] || ""}
                  secondType={type[1] || ""}
                  name={name}
                  image={img}
                />
              </Grid>
            ])
          }
        }
      }
    )
  }, [loading])
  return (
    <Grid
      container
      spacing={4}
      className={classes.root}
      justifyContent="center"
    >
      {showScrollToTop && <ScrollToTop showBellow={ScrollToTopMinHeight} />}
    </Grid>
  )
}

export default MainContent

