import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from '../home/Home';
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact";

function Pages() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/services' component={Services}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Router>
    </>
  )
}

export default Pages