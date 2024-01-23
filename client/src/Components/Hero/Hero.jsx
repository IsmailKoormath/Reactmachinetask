import React from 'react'
import LineChart from '../../Pages/Home/Components/LineChart/LineChart'
import classes from './Hero.module.css'
const Hero = () => {
  return (
    <div className={classes.Hero_section}>
      <div>
      <h4>Good Monrning ! </h4>
      <div>
        <div>
          <h6></h6>
          <span></span>
        </div>
        <img src="" alt="profile" />
      </div>
      </div>
        <LineChart/>
    </div>
  )
}

export default Hero