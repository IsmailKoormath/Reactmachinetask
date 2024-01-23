import React from 'react'
import classes from './CustomButtton.module.css'
const CustomButton = ({ color, background, text, img }) => {
  return (
    <div style={{ backgroundColor: background , color: color }} className={classes.custombutton}>
      <img src={img} alt="menu" />
      <span>{text}</span>
    </div>
  )
}

export default CustomButton