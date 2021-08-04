import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 307,
    height: 115,
    margin: "auto",
    padding: "26px 37px 25px 27px",
    alignItems: "center",
    position: "relative",
    borderRadius: 18,
  },
  image: {
    height: 117,
    width: 126,
  },
  CardContent: {
    marginLeft: 32,
    padding: 0,
  },
  title: {
    "& > *": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: 12,
      letterSpacing: "0.04em",
    },
  },
  pokemonNumber: {
    color: "#9E9E9E",
    margin: "0 6.25px 0 0",
  },
  pokemonName: {
    color: "#000000",
  },
  type: {
    "& > *": {
      overflow: "hidden",
      width: 52,
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: 8,
      letterSpacing: "0.04em",
      color: "white",
      textAlign: "center",
      backgroundColor: "red",
      borderRadius: 18,
      border: "1px",
    },
  },
  pokemonTypeOne: {
    margin: "6px 0 3px 0",
  },
  likeContainer: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
    border: " 1px solid #E4E4E4",
    borderRadius: 50,
    padding: 0,
    width: 29,
    height: 29,
    "& > *": {
      padding: 0,
      width: "100%",
      height: "100%",
    },
  },
  fire : {
    backgroundColor  :"red"
  }
}));
