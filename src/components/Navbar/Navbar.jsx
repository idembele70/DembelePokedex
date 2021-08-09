import { Box, Button } from "@material-ui/core"
import React from "react"
import { NavLink } from "react-router-dom"
import useStyles from "./styles"

function Navbar() {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      width="90vw"
      maxWidth={460}
      mx="auto"
      mt={9}
      justifyContent="space-between"
    >
      <NavLink
        activeClassName={classes.current}
        to="/pokedex"
        className={`${classes.link} ${classes.pokedex}`}
      >
        <Button variant="text" className={`${classes.title}`}>
          POKEDEX
        </Button>
      </NavLink>
      <NavLink
        activeClassName={classes.current}
        to="/liked"
        className={`${classes.link} ${classes.liked}`}
      >
        <Button variant="text" className={`${classes.title}`}>
          LIKED
        </Button>
      </NavLink>
    </Box>
  )
}

export default Navbar
