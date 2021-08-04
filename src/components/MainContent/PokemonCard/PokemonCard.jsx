import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from "@material-ui/core"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import React from "react"
import PropTypes from "prop-types"
import colorType from "../../../data/colorType.json"
import useStyles from "./style"

function PokemonCard({ firstType, secondType }) {
  const classes = useStyles()
  const firstTypeColor =
    colorType[firstType ? firstType.toLowerCase() : "normal"]
  const secondTypeColor =
    colorType[secondType ? secondType.toLowerCase() : "normal"]
  return (
    <Card variant="outlined" className={classes.root}>
      <CardMedia
        className={classes.image}
        image="img/assets/ivysaur.png"
        title="pokemon"
      />
      <CardContent className={classes.CardContent}>
        <Box display="flex" className={classes.title}>
          <Typography variant="body2" className={classes.pokemonNumber}>
            005
          </Typography>
          <Typography variant="body2" className={classes.pokemonName}>
            IVYSAUR
          </Typography>
        </Box>
        <Box className={classes.type}>
          <Box className={classes.pokemonTypeOne} bgColor={firstTypeColor}>
            {firstType && firstType.toUpperCase()}
          </Box>
          <Box className={classes.pokemonTypeTwo} bgColor={secondTypeColor}>
            {secondType && secondType.toUpperCase()}
          </Box>
        </Box>
      </CardContent>

      <CardActions className={classes.likeContainer}>
        <IconButton>
          <ThumbUpAltOutlinedIcon
            className={classes.likeBtn}
            fontSize="small"
          />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PokemonCard

PokemonCard.propTypes = {
  firstType: PropTypes.string.isRequired,
  secondType: PropTypes.string.isRequired
}

