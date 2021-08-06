import { makeStyles } from "@material-ui/core"
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

const useStyles = makeStyles({
  root: {
    transform: "rotate(180deg)",
    cursor: "pointer",
    position: "fixed",
    transition: "1s",
    zIndex: 2,
    right: 10,
    bottom: 10
  }
})
function ScrollToTop({ showBellow }) {
  const classes = useStyles()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <ArrowDropDownCircleRoundedIcon
      onClick={handleScrollTop}
      className={classes.root}
      color="disabled"
      fontSize="large"
    />
  )
}

ScrollToTop.propTypes = {
  showBellow: PropTypes.number.isRequired
}

export default ScrollToTop
