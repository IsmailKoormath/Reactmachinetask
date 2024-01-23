import React from 'react'
import LineChart from '../LineChart/LineChart'
import classes from './Hero.module.css'

import profile from '../../../../Assets/Rectangle 10.png'
import smile from '../../../../Assets/smile.png'
import PieChart from '../Pie_chart/Pie_chart'
import UsersTable from '../Table/UserTable'
import UserCard from '../UserCard/UserCard'
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
      <div className={classes.chartSection}>
        <LineChart />
        <PieChart />
      </div>
      <div className={classes.table_section}>
        <UsersTable />
        <UserCard />
      </div>
    </div>
  )
}

export default Hero