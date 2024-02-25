import React, { useState } from "react";
import "./index.css"
import "./scss/main.scss"
import Header from './components/Header'
import Home from './components/Home'
import Company from './components/Company'
import Footer from './components/Footer'
import Rustop from './components/Rustop'
import Infinity from './components/Infinity'
import Tradegraff from './components/Tradegraff'
import Tradecote from './components/Tradecote'
import Hydrograff from './components/Hydrograff'
import Hydrosec from './components/Hydrosec'
import Tradetherm from './components/Tradetherm'
import Courses from './components/Courses'
import Showrooms from './components/Showrooms'
import Workshops from './components/Workshops'
import Contact from './components/Contact'
import Page404 from './components/Page404'

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
      <Route path="/company" exact component={Company} />
      <Route path="/infinity" exact component={Infinity} />
      <Route path="/rustop" exact component={Rustop} />
      <Route path="/tradegraff" exact component={Tradegraff} />
      <Route path="/tradecote" exact component={Tradecote} />
      <Route path="/hydrograff" exact component={Hydrograff} />
      <Route path="/hydrosec" exact component={Hydrosec} />
      <Route path="/tradetherm" exact component={Tradetherm} />
      <Route path="/courses" exact component={Courses} />
      <Route path="/workshops" exact component={Workshops} />
      <Route path="/showrooms" exact component={Showrooms} />
      <Route path="/contact" exact component={Contact} />
      <Route component={Page404} />
    </Switch>
    <Footer />
    {showOnScroll &&
      <Arrow />
    }
  </main>
</Router>
  );
}