import React from 'react'
import Briefcase from '../../Assets/Briefcase.png'
import statBoard from '../../Assets/StatBoard.png'
import Shutdown from '../../Assets/Shutdown.png'
import menu from '../../Assets/Circled Menu.png'
import support from '../../Assets/Support.png'
import plugins from '../../Assets/Puzzle.png'
import help from '../../Assets/Help.png'

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
        <CustomButton color={"black"} background={'white'} text={'Dashbord'} img={menu}/>
        <CustomButton color={"white"} background={'#1A1F30'} text={'Support'} img={support} />
        <CustomButton color={"white"} background={'#1A1F30'} text={'Plugins'} img={plugins} />
        <CustomButton color={"white"} background={'#1A1F30'} text={'Help'} img={help} />
      </div>
      <div className={classes.logout}>
        <span>Logout </span>
        <img src={Shutdown} alt="Shutdown" />
      </div>
    </div>
  )
}

export default Sidebar