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
import React, { useState } from "react"
import useStyles from "./styles"
import UseLike from "../../hooks/useLike"

function PokemonCard({ id, name, firstType, secondType, image, isLiked }) {
  const COLORTYPE = {
    normal: "#CACACA",
    electric: "#FFE175",
    grass: "#B4FE7B",
    poison: "#BF8CD1",
    bug: "#D1E16F",
    ghost: "#805594",
    fire: "#FF8A8A",
    water: "#88D1FB",
    ground: "#CA9F5E",
    rock: "#898373",
    ice: "#C6EAFF",
    fighting: "#C6EAFF",
    steel: "#E4E4E4",
    psychic: "#FFB7FC",
    flying: "#5F9FFF",
    dragon: "#C699FF"
  }
  const classes = useStyles()
  const firstTypeColor = firstType
    ? COLORTYPE[firstType.toLowerCase()]
    : COLORTYPE.normal
  const secondTypeColor = secondType
    ? COLORTYPE[secondType.toLowerCase()]
    : COLORTYPE.normal
  const [like, setLike] = useState(isLiked)
  const onerror = (e) => {
    e.target.onerror = null
    e.target.src = "img/assets/404-group.png"
  }
  const { ToggleLike } = UseLike()
  const handleLike = (e) => {
    setLike(e.target.checked)
    ToggleLike(id)
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
                checked={like}
                onChange={handleLike}
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
  firstType: PropTypes.string,
  secondType: PropTypes.string,
  image: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired
}
PokemonCard.defaultProps = {
  firstType: "",
  secondType: ""
}
export default PokemonCard
