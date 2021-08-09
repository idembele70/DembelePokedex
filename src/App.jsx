import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import {
  PokedexMainContent,
  Navbar,
  LikedPokemon,
  SearchBars
} from "./components"

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/liked" exact component={LikedPokemon} />
        <Route path="/pokedex" exact>
          <SearchBars />
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
