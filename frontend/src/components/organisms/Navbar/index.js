import React from 'react'
import { Link } from 'react-router-dom'
import '../../../static/css/Navbar.css'
function Navbar() {
    return (
        <header>
            <div className="logo-container">
                <Link to="/">LOL101</Link>
                </div>
        <nav>
                <ul className="nav-links">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Resources</Link></li>
                    <li><Link to="/">Masteries</Link></li>
                    <li><Link to="/rotations">Champion Rotation</Link></li>
                </ul>
        </nav>
        </header>
    )
}
export default Navbar