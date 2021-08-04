import { Grid } from "@material-ui/core";
import React from 'react';
import useStyles from "./styles";
import SearchBar from "./SearchBar";


function SearchBars() {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={2} justifyContent="center">
      <Grid item >
        <SearchBar placeholder="Search..." className={classes.searchByName} />
      </Grid>
      <Grid item>
        <SearchBar placeholder="Number" className={classes.searchByNumber} />
        <SearchBar placeholder="Type" className={classes.searchByType} />
      </Grid>
    </Grid>
  )
}

export default SearchBars
