/* eslint-disable react/jsx-props-no-spreading */
import { Box, Grid } from "@material-ui/core"
import { useAutocomplete } from "@material-ui/lab"
import { styled } from "@material-ui/styles"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import SearchBar from "./SearchBar"
import useStyles from "./styles"

function SearchBars({ onFetchBy }) {
  const classes = useStyles()
  const [pokemons, setPokemons] = useState([])
  const handleFindBy = (e, value) => {
    const { id: targetId } = e.target
    const name = targetId.split("-")[0]
    switch (name) {
      case "findByName":
        onFetchBy(name, value ? value.name : undefined)
        break
      case "findByNumber":
        onFetchBy(name, value ? value.id : undefined)
        break
      case "findByType":
        onFetchBy(name, value)
        break
      default:
        console.log("Name not found !")
        break
    }
  }
  useEffect(() => {
    fetch("data/pokemons.json")
      .then((res) => res.json())
      .then(setPokemons)
    return () => window.removeEventListener("change", () => { })
  }, [])

  // AUTOCOMPLETE !
  const Listbox = styled("ul")({
    width: "88%",
    margin: 0,
    padding: 0,
    zIndex: 1,
    left: "50%",
    transform: "translateX(-50%)",
    position: "absolute",
    listStyle: "none",
    backgroundColor: "white",
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      color: "white",
      cursor: "pointer"
    },
    "& li:active": {
      backgroundColor: "#2977f5",
      color: "white"
    }
  })
  const {
    getRootProps: getNameRootProps,
    getInputProps: getNameInputProps,
    getListboxProps: getNameListboxProps,
    getOptionProps: getNameOptionProps,
    groupedOptions: nameGroupedOptions
  } = useAutocomplete({
    id: "findByName",
    options: pokemons.sort(
      (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)
    ),
    getOptionLabel: (option) => option.name,
    onChange: handleFindBy
  })
  const {
    getRootProps: getNumberRootProps,
    getInputProps: getNumberInputProps,
    getListboxProps: getNumberListboxProps,
    getOptionProps: getNumberOptionProps,
    groupedOptions: numberGroupedOptions
  } = useAutocomplete({
    id: "findByNumber",
    options: pokemons.sort((a, b) => a.id - b.id),
    getOptionLabel: (option) => option.id,
    onChange: handleFindBy
  })
  const types = []
  pokemons.forEach((pokemon) => {
    if (pokemon.type.length > 1) {
      if (types.includes(pokemon.type[0]) === false) types.push(pokemon.type[0])
      if (!types.includes(pokemon.type[1])) types.push(pokemon.type[1])
    }
  })
  const {
    getInputProps: getTypeInputProps,
    getListboxProps: getTypeListboxProps,
    getOptionProps: getTypeOptionProps,
    getRootProps: getTypeRootProps,
    groupedOptions: typeGroupedOptions
  } = useAutocomplete({
    id: "findByType",
    options: types,
    getOptionsLabel: (option) => option,
    onChange: handleFindBy
  })
  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      justifyContent="center"
    >
      <Grid item {...getNameRootProps()} className={classes.searchBarContainer}>
        <SearchBar
          name="findByName"
          placeholder="Search..."
          className={classes.searchByName}
          {...getNameInputProps()}
        />
        {nameGroupedOptions.length > 0 ? (
          <Listbox {...getNameListboxProps()}>
            {nameGroupedOptions.map((option, index) => (
              <li
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...getNameOptionProps({ option, index })}
              >
                {option.name}
              </li>
            ))}
          </Listbox>
        ) : null}
      </Grid>
      <Grid item>
        <Box
          component="div"
          display="inline-block"
          mr={2}
          maxWidth={102}
          {...getNumberRootProps()}
          className={classes.searchBarContainer}
        >
          <SearchBar
            name="findByNumber"
            placeholder="Number"
            className={classes.searchByNumber}
            {...getNumberInputProps()}
          />
          {numberGroupedOptions.length > 0 ? (
            <Listbox {...getNumberListboxProps()}>
              {numberGroupedOptions.map((option, index) => (
                <li {...getNumberOptionProps({ option, index })}>
                  {option.id}
                </li>
              ))}
            </Listbox>
          ) : null}
        </Box>
        <Box
          component="div"
          display="inline-block"
          {...getTypeRootProps()}
          className={classes.searchBarContainer}
        >
          <SearchBar
            name="findByType"
            placeholder="Type"
            className={classes.searchByType}
            {...getTypeInputProps()}
          />
          {typeGroupedOptions.length ? (
            <Listbox {...getTypeListboxProps()}>
              {typeGroupedOptions.map((option, index) => (
                <li {...getTypeOptionProps({ option, index })}>{option}</li>
              ))}
            </Listbox>
          ) : null}
        </Box>
      </Grid>
    </Grid>
  )
}
SearchBars.propTypes = {
  onFetchBy: PropTypes.func
}
SearchBars.defaultProps = {
  onFetchBy: () => { }
}
export default SearchBars
