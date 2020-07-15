import React from 'react'
import Footer from './layouts/Footer'
import Container from './components/Container'
import Routers from './Routes'
import Nav from './layouts/Nav'

export default ( )=>{
     return (
            <div>
                <Nav/>
                <Routers/>
                <Footer/>
            </div>
     )
}