import React from 'react'
import Briefcase from '../../Assets/Briefcase.png'
import statBoard from '../../Assets/StatBoard.png'
import Shutdown from '../../Assets/Shutdown.png'

import classes from './Sidebar.module.css'
import CustomButton from '../CustomButton/CustomButton'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <img src={Briefcase} alt="Briefcase" />
        <img src={statBoard} alt="statBoard" />
      </div>
      <div className={classes.pageLinks}>
        <CustomButton />
        <CustomButton />
        <CustomButton />
        <CustomButton />
      </div>
      <div className={classes.logout}>
        <span>Logout </span>
        <img src={Shutdown} alt="Shutdown" />
      </div>
    </div>
  )
}

export default Sidebar