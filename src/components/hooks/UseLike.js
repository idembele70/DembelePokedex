import React from "react"

function UseLike() {
  const GetAllLiked = () => {
    JSON.parse(localStorage.getItem("LikeDB"))
  }

  const GetLikeById = (itemId) => {
    if (localStorage.getItem("LikeDB")) {
      const data = JSON.parse(localStorage.getItem("LikeDB"))
      return data.includes(itemId)
    }
    return false
  }

  const ToggleLike = (itemId) => {
    if (localStorage.getItem("LikeDB")) {
      const oldData = JSON.parse(localStorage.getItem("LikeDB"))
      if (oldData.includes(itemId)) {
        const item = oldData.indexOf(itemId)
        oldData.splice(item, 1)
        return localStorage.setItem("LikeDB", JSON.stringify([...oldData]))
      }
      return localStorage.setItem(
        "LikeDB",
        JSON.stringify([...oldData, itemId])
      )
    }
    return localStorage.setItem("LikeDB", JSON.stringify([itemId]))
  }

  return { GetAllLiked, GetLikeById, ToggleLike }
}

export default UseLike
