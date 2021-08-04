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
import img from "../../../assets/ivysaur.png"
import useStyles from "./style"

export default function PokemonCard({ firstType, secondType }) {
  const classes = useStyles()

  return (
    <Card variant="outlined" className={classes.root}>
      <CardMedia className={classes.image} image={img} title="pokemon" />
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
          <Box
            className={classes.pokemonTypeOne}
            bgColor={[firstType.toLowerCase()]}
          >
            {firstType.toLowerCase()}
          </Box>
          <Box
            className={classes.pokemonTypeTwo}
            bgColor={[secondType.toLowerCase()]}
          >
            {secondType}
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
