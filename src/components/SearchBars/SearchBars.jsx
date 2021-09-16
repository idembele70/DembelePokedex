import { Grid } from "@material-ui/core"
import { useAutocomplete } from "@material-ui/lab"
import { createStyles, styled } from "@material-ui/styles"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import useStyles from "./styles"

function SearchBars({ onFetchBy }) {
  const classes = useStyles()
  const [pokemons, setPokemons] = useState([])
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
  useEffect(() => {
    fetch("data/pokemons.json")
      .then((res) => res.json())
      .then(setPokemons)
    return () => window.removeEventListener("change", () => { })
  }, [])
  const { findByName, findByNumber, findByType } = findBy

  // AUTOCOMPLETE !
  const Listbox = styled("ul")(({ theme }) => ({
    width: "90%",
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: "absolute",
    listStyle: "none",
    backgroundColor: "grey",
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "#4a8df6",
      color: "white",
      cursor: "pointer"
    },
    "& li:active": {
      backgroundColor: "#2977f5",
      color: "white"
    }
  }))
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions
  } = useAutocomplete({
    id: "findByName",
    options: pokemons,
    getOptionLabel: (option) => option.name
  })
  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      justifyContent="center"
    >
      <Grid item {...getRootProps()} className={classes.searchBarContainer}>
        <SearchBar
          name="findByName"
          placeholder="Search..."
          className={classes.searchByName}
          value={findByName}
          onChange={handleFindBy}
          autoComplete="false"
          {...getInputProps()}
        />
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <li {...getOptionProps({ option, index })}>{option.name}</li>
            ))}
          </Listbox>
        ) : null}
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
