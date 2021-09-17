import { Grid } from "@material-ui/core"
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
    onFetchBy(name, value ? value.name : "")
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
  const types = [...pokemons.map((pokemon) => pokemon.type.join(","))].filter(
    (type, idx, thi$) => thi$.indexOf(type) === idx
  )
  console.log(types)
  const {
    getRootProps: getTypeRootProps,
    getInputProps: getTypeInputProps,
    getListboxProps: getTypeListboxProps,
    getOptionProps: getTypeOptionsProps,
    groupedOptions: typeGroupedOptions
  } = useAutocomplete({
    id: "findByType",
    options: types.sort()
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
        <SearchBar
          name="findByNumber"
          placeholder="Number"
          className={classes.searchByNumber}
          autoComplete="false"
        />
        <SearchBar
          name="findByType"
          placeholder="Type"
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
