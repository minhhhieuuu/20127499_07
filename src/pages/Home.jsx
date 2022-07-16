import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Silder from '../components/Silder'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <NavBar/>
        <Silder/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home
