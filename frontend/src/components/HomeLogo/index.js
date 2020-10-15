import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../static/images/logo1.png'
import ahri from '../../static/images/ahri.png'
import '../../static/css/HomeLogo.css'
function HomeLogo() {
    return (
        <header>
        <div>
            <div className="frame"></div>
            <div className="logos-container2">
            <div className="logo"><img src={logo} alt="Logo"/></div>
            <div className="parall"></div>
            <div className="logo2"><img src={ahri} alt="Logo"/></div>
            
            </div>
        </div>
        </header>
    )
}
export default HomeLogo