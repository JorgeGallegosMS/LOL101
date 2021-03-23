import React from 'react'
import { Link } from 'react-router-dom'
import '../../static/css/Navbar.css'
import './main.js'

export default function Navbar() {
    return (
        <header className="l-header">
        <nav className="nav bd-grid">
            <div>
                <li className="nav__logo"><Link className="logoNav" to="/">LOL101</Link></li>
            </div>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><Link className="item" to="/champions">Champions</Link></li>
                    <li className="nav__item"><Link className="item" to="/rotations">Champion Rotations</Link></li>
                    <li className="nav__item"><Link className="item" to="/">Masteries</Link></li>
                </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
                <i className="bx bx-menu"></i>
            </div>
        </nav>
    </header>
    )
}