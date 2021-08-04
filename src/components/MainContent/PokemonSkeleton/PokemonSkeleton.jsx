import { Grid } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import React from "react"
import useStyles from "./style"

function PokemonSkeleton() {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      spacing={4}
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Skeleton variant="rect" className={classes.skeletonImg} />
      </Grid>
      <Grid item container className={classes.skeletonContent}>
        <Grid item xs={12}>
          <Skeleton variant="text" className={classes.skeletonTitle} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="text" className={classes.skeletonType} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="text" className={classes.skeletonType} />
        </Grid>
        <Skeleton variant="circle" className={classes.skeletonLike} />
      </Grid>
    </Grid>
  )
}

export default PokemonSkeleton
