import React from 'react'
import {Routes, Route, Redirect, hashHistory, Router} from 'react-router'
import Container from './components/Container'
import Home from './components/Home'


export default ( ) => {
    return (
        <Router history={hashHistory}>
              <Route path='/login' component={Container}/>
              <Route paht='/home' component={Home}/>
              
        </Router>
    )
}