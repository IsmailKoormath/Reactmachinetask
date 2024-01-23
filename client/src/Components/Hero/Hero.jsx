import React from 'react'
import LineChart from '../../Pages/Home/Components/LineChart/LineChart'
import classes from './Hero.module.css'

import profile from '../../Assets/Rectangle 10.png'
import smile from '../../Assets/smile.png'
const Hero = () => {
  return (
    <div className={classes.Hero_section}>
      <div className={classes.hero_top}>
        <h4>Good Monrning ! <img src={smile} alt="smile" /></h4>
        <div className={classes.profile}>
          <div className={classes.profileDetails}>
            <h6>John Doe</h6>
            <span>john@doe.com</span>
          </div>
          <img src={profile} alt="profile" />
        </div>
      </div>
      <LineChart />
    </div>
  )
}

export default Hero