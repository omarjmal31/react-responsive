import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/pages/home'
import About from './views/pages/about'
import SignUp from './views/pages/signup'
import Restaurant from './views/pages/restaurant'

import './App.css'
import "./assets/custom.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-us" exact>
          <About />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/restaurant" exact>
          <Restaurant />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
