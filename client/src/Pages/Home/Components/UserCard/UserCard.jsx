import React from 'react'
import classes from './UserCard.module.css'

import profile from '../../../../Assets/media.png'
import facebook from '../../../../Assets/facebook.png'
import instagram from '../../../../Assets/instagram.png'
import twitter from '../../../../Assets/twitter.png'
const UserCard = () => {
    return (
        <div className={classes.userProfile}>
            <img src={profile} alt="user-profile" />
            <div className={classes.userDetails}>
                <h6>John Doe</h6>
                <span>CEO</span>
                <div className={classes.mediaLinks}>
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
        </div>
    )
}

export default UserCard