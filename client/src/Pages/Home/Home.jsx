import React, { useState } from 'react'
import Hero from './Components/Hero/Hero'
import Sidebar from '../../Components/Sidebar/Sidebar'
import classes from './Home.module.css'
const Home = () => {
  const [viewsidebar, setviewSidebar] = useState(true)
const handleSidebar = ()=>{
  setviewSidebar(!viewsidebar)
}
  return (
    <div className={classes.HomePage}>
      {viewsidebar && <Sidebar handleSidebar={handleSidebar}/>}     
      <Hero viewsidebar={viewsidebar} handleSidebar={handleSidebar} />
    </div>
  )
}

export default Home