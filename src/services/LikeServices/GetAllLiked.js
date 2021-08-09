function GetAllLiked() {
  return JSON.parse(localStorage.getItem("LikeDB"))
}

export default GetAllLiked
