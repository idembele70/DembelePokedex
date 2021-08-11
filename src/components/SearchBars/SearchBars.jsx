import { Grid } from "@material-ui/core"
import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import useStyles from "./styles"
import SearchBar from "./SearchBar"

function SearchBars({ onFetchBy }) {
  const isMounted = useRef(true)
  const classes = useStyles()
  const [findBy, setFindByName] = useState({
    findByName: "",
    findByNumber: "",
    findByType: ""
  })
  const handleFindBy = (e) => {
    const { name, value } = e.target
    setFindByName((oldState) => ({
      ...oldState,
      [name]: value.toUpperCase()
    }))
    onFetchBy(name, value)
  }
  useEffect(
    () => () => {
      window.removeEventListener("change", () => { })
    },
    []
  )
  const { findByName, findByNumber, findByType } = findBy
  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      justifyContent="center"
    >
      <Grid item>
        <SearchBar
          name="findByName"
          placeholder="Search..."
          className={classes.searchByName}
          value={findByName}
          onChange={handleFindBy}
          autoComplete="false"
        />
      </Grid>
      <Grid item>
        <SearchBar
          name="findByNumber"
          placeholder="Number"
          value={findByNumber}
          onChange={handleFindBy}
          className={classes.searchByNumber}
          autoComplete="false"
        />
        <SearchBar
          name="findByType"
          placeholder="Type"
          value={findByType}
          onChange={handleFindBy}
          className={classes.searchByType}
          autoComplete="false"
        />
      </Grid>
    </Grid>
  )
}
SearchBars.propTypes = {
  onFetchBy: PropTypes.func
}
SearchBars.defaultProps = {
  onFetchBy: null
}
export default SearchBars
