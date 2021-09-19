import { makeStyles } from "@material-ui/core"

export default makeStyles({
  root: {
    width: "82vw",
    maxWidth: 674,
    margin: "53px auto 54px"
  },
  form: {
    width: "100%",
    "& > *": {
      height: "36px",
      boxShadow: "0px 4px 16px -3px rgba(0, 0, 0, 0.07)",
      borderRadius: 18,
      border: "none",
      padding: "0 0 0 22px",

      fontSize: 12,
      lineHeight: 36,
      letterSpacing: "0.04em",
      color: "#C4C4C4"
    }
  },
  searchBarContainer : {
    position :"relative"
  },
  searchByName: {
    width: "82vw",
    maxWidth: "383px"
  },
  searchByNumber: {
    width: 102,
  },
  searchByType: {
    width: 131
  },

})
