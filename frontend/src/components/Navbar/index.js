import React from 'react'
import { Link } from 'react-router-dom'
import '../../static/css/Navbar.css'
import './main.js'

export default function Navbar() {
    return (
        <header className="l-header">
        <nav className="nav bd-grid">
            <div>
                <a href="#" className="nav__logo">LOL101</a>
            </div>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" class="nav__link">Champions</a></li>
                    <li className="nav__item"><a href="#resume" class="nav__link">Champion Rotation</a></li>
                    <li className="nav__item"><a href="#contact" class="nav__link">Masteries</a></li>
                </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
                <i className="bx bx-menu"></i>
            </div>
        </nav>
    </header>
    )
}