import React, { useState } from 'react'
import LineChart from '../LineChart/LineChart'
import classes from './Hero.module.css'

import menu from '../../../../Assets/menu.svg'
import profile from '../../../../Assets/Rectangle 10.png'
import smile from '../../../../Assets/smile.png'
import PieChart from '../Pie_chart/Pie_chart'
import UserCard from '../UserCard/UserCard'
import ItemsTable from '../Table/ItemsTable'
const Hero = ({ handleSidebar, viewsidebar }) => {
  return (
    <div className={classes.Hero_section}>
      <div className={classes.hero_top}>
        <img onClick={handleSidebar} className={classes.menuIcon} src={menu} alt="menu" />
        <h4>Good Monrning ! <img src={smile} alt="smile" /></h4>
        <div className={classes.profile}>
          <div className={classes.profileDetails}>
            <h6>John Doe</h6>
            <span>john@doe.com</span>
          </div>
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className={classes.chartSection}>
        <LineChart />
        <PieChart />
      </div>
      <div className={classes.table_section}>
        <ItemsTable />
        <UserCard />
      </div>
    </div>
  )
}

export default Hero