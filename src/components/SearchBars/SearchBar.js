import { withStyles, InputBase } from "@material-ui/core"

export default withStyles((theme) => ({
  input: {
    borderRadius: 18,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 12,
    padding: "7px 12px",
    boxShadow: "0px 4px 16px -3px rgba(0, 0, 0, 0.07)",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    letterSpacing: "0.04em",
    color: "#C4C4C4",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      boxShadow: `0px 0 0 2px rgb(0 0 0 / 15%)`,
      borderColor: "#000000"
    }
  }
}))(InputBase)
