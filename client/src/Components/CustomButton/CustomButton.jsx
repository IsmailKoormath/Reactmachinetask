import React from 'react'
import menu from '../../Assets/Circled Menu.png'
import classes from './CustomButtton.module.css'
const CustomButton = () => {
  return (
    <div style={{backgroundColor:"white"}} className={classes.custombutton}>
          <img src={menu} alt="menu" />
          <span>Dashboard</span>
    </div>
  )
}

export default CustomButton