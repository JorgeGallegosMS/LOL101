import React from 'react'
import { Link } from 'react-router-dom'
import '../../../static/css/Navbar.css'
function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <Link to="/" className="header-brand">LeagueOL101</Link>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Resources</Link></li>
                    <li><Link to="/">Masteries</Link></li>
                    <li><Link to="/rotations">Champion Rotation</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar