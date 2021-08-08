import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography
} from "@material-ui/core"
import { ThumbUp, ThumbUpOutlined } from "@material-ui/icons"
import PropTypes from "prop-types"
import React from "react"
import colorType from "../../../data/colorType.json"
import useStyles from "./styles"

function PokemonCard({ id, name, firstType, secondType, image }) {
  const classes = useStyles()
  const firstTypeColor = firstType
    ? colorType[firstType.toLowerCase()]
    : colorType.normal
  const secondTypeColor = secondType
    ? colorType[secondType.toLowerCase()]
    : colorType.normal
  const onerror = (e) => {
    e.target.onerror = null
    e.target.src = "img/assets/404-group.png"
  }
  return (
    <Card variant="outlined" className={classes.root}>
      <CardMedia
        className={classes.image}
        image={image}
        title="pokemon"
        component="img"
        onError={onerror}
      />
      <CardContent className={classes.CardContent}>
        <Box display="flex" className={classes.title}>
          <Typography variant="body2" className={classes.pokemonNumber}>
            {id}
          </Typography>
          <Typography variant="body2" className={classes.pokemonName}>
            {name}
          </Typography>
        </Box>
        <Box className={classes.type}>
          <Box
            style={{ backgroundColor: firstTypeColor }}
            className={classes.pokemonTypeOne}
          >
            {firstType && firstType.toUpperCase()}
          </Box>
          <Box
            className={classes.pokemonTypeTwo}
            style={{ backgroundColor: secondTypeColor }}
          >
            {secondType && secondType.toUpperCase()}
          </Box>
        </Box>
      </CardContent>

      <CardActions className={classes.likeContainer}>
        <IconButton>
          <FormControlLabel
            className={classes.likeBtn}
            control={
              <Checkbox
                color="primary"
                icon={<ThumbUpOutlined fontSize="small" />}
                checkedIcon={<ThumbUp fontSize="small" />}
                name={`likeBtn${id}`}
              />
            }
          />
        </IconButton>
      </CardActions>
    </Card>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  firstType: PropTypes.string.isRequired,
  secondType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
export default PokemonCard
