import { Box, Button } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles"



function Navbar() {
  const classes = useStyles()
  return (
    <Box display="flex" width="90vw" maxWidth={460} mx="auto" mt={9} justifyContent="space-between">
      <Button variant="body2" className={`${classes.title} ${classes.pokedex}`}>
        POKEDEX
      </Button>
      <Button variant="body2" className={`${classes.title} ${classes.liked}`}>
        LIKED
      </Button>
    </Box>
  )
}

export default Navbar
