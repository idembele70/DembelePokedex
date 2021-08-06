import { makeStyles } from "@material-ui/core"

export default makeStyles({
  root: {
    width: 307,
    height: 168,
    position: "relative",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: 18,
    margin: 0
  },
  skeletonImg: {
    width: 126,
    height: 117
  },
  skeletonContent: {
    width: 85,
    height: 47
  },
  skeletonTitle: {
    width: "100%",
    height: 14
  },
  skeletonType: {
    width: 52,
    height: 12
  },
  skeletonLike: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
    padding: 0,
    width: 29,
    height: 29
  }
})
