function ToggleLike(itemId) {
  if (localStorage.getItem("LikeDB")) {
    const oldData = JSON.parse(localStorage.getItem("LikeDB"))
    if (oldData.includes(itemId)) {
      const item = oldData.indexOf(itemId)
      oldData.splice(item, 1)
      return localStorage.setItem("LikeDB", JSON.stringify([...oldData]))
    }
    return localStorage.setItem("LikeDB", JSON.stringify([...oldData, itemId]))
  }
  return localStorage.setItem("LikeDB", JSON.stringify([itemId]))
}

export default ToggleLike