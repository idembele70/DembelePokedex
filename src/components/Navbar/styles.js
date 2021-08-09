import { makeStyles } from "@material-ui/core"

export default makeStyles({
  link: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    letterSpacing: "0.345em",
    textAlign: "center",
    borderRadius: "18px",
    fontWeight: "bold",
    color: "#000000",
    boxShadow: "0px 4px 16px -3px rgba(0, 0, 0, 0.15)",
    "& > *": {
      width: "100%",
      borderRadius: "18px"
    }
  },
  pokedex: {
    textDecoration: "none",
    maxWidth: 211,
    width: "45%",
    height: 34,
    lineHeight: "34px"
  },
  liked: {
    textDecoration: "none",
    maxWidth: 171,
    width: "37%",
    height: 34,
    lineHeight: "34px"
  },
  current: {
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  }
})
