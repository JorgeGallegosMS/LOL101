import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../../static/images/logo1.png'
import '../../../static/css/HomeLogo.css'
function HomeLogo() {
    return (
        <div>
            <div className="logo"><img src={logo} alt="Logo"/></div>
        </div>
    )
}
export default HomeLogo