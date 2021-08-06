import { Box } from "@material-ui/core"
import React from "react"
import { MainContent, Navbar, SearchBars } from "./components"

function App() {
  return (
    <Box>
      <Navbar />
      <SearchBars />
      <MainContent />
    </Box>
  )
}

export default App
