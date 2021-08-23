import React from 'react'
import "./App.css"
import Header from './components/Header'
import Seasion from './components/Seasion'
import Collection from './components/Collection'
import Products from './components/Products'
import Brands from './components/Brands'
import Footer from './components/Footer'



function App() {
  return (
    <div className="app"> 
      <Header/>
      <Seasion />
      <Collection />
      <Products/>
      <Brands/>
      <Footer/>
    </div>
  )
}

export default App

