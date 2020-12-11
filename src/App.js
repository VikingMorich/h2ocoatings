import React, { useState } from "react";
import "./index.css"
import "./scss/main.scss"
import Header from './components/Header'
import Home from './components/Home2'
import Company from './components/Company'
import Footer from './components/Footer'
import Rustop from './components/Rustop'
import Infinity from './components/Infinity'
import Tradegraff from './components/Tradegraff'
import Tradecote from './components/Tradecote'
import Hydrograff from './components/Hydrograff'
import Tradetherm from './components/Tradetherm'
import Courses from './components/Courses'
import Showrooms from './components/Showrooms'
import Contact from './components/Contact'

import Arrow from './components/Arrow'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default function App() {
  const [showOnScroll, setShowOnScroll] = useState(false)

useScrollPosition(({ prevPos, currPos }) => {
  currPos.y !== 0 ? setShowOnScroll(true) : setShowOnScroll(false)
})

return (
<Router>
  <main>
    <Header /> 
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/company"  component={Company} />
      <Route path="/infinity"  component={Infinity} />
      <Route path="/rustop"  component={Rustop} />
      <Route path="/tradegraff"  component={Tradegraff} />
      <Route path="/tradecote"  component={Tradecote} />
      <Route path="/hydrograff"  component={Hydrograff} />
      <Route path="/tradetherm"  component={Tradetherm} />
      <Route path="/courses"  component={Courses} />
      <Route path="/showrooms"  component={Showrooms} />
      <Route path="/contact"  component={Contact} />
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
    <Footer />
    {showOnScroll &&
      <Arrow />
    }
  </main>
</Router>
  );
}