import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Sidebar from '../../Components/Sidebar/Sidebar'
import classes from './Home.module.css'
const Home = () => {
  return (
    <div className={classes.HomePage}>
        <Sidebar/>
        <Hero/>
    </div>
  )
}

export default Home