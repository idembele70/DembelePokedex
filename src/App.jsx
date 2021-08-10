import React from "react"
import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from "react-router-dom"
import {
  LikedPokemon, Navbar, PokedexMainContent
} from "./components"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/liked" exact component={LikedPokemon} />
        <Route path="/pokedex" exact>
          <PokedexMainContent />
        </Route>
        <Route path="/">
          <Redirect to="/pokedex" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
