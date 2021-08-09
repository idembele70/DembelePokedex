function GetLikeById(itemId) {
  if (localStorage.getItem("LikeDB")) {
    const data = JSON.parse(localStorage.getItem("LikeDB"))
    return data.includes(itemId)
  }
  return false
}
export default GetLikeById
