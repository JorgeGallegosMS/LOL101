import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../static/images/logo1.png'
import ahri from '../../static/images/ahri.png'
import yone from '../../static/images/Header.png'
import championi from '../../static/images/champion-intro.png'
import thresh from '../../static/images/thresh.png'
import jinx from '../../static/images/jinx.png'
import '../../static/css/HomeLogo.css'


export default function HomeLogo() {
    return (
        <div>
        <main className="l-main">
        <div className="home__header">
        </div>
        <section className="home bd-grid" id="home">
                <h2 className="name__title">Your one stop for League of Legends</h2>
                <h2 className="name__sub">We always offer <span className="hl">up-to-date information </span><span className="break">
                so you don't have to worry</span></h2>
                <a href="#l-champ" className="intro__button"><i className="fa fa-angle-down"></i></a>
        </section>
        </main>
        <main className="l-champ">
        <div className="champi__header">
        </div>
        <section className="champi bd-grid" id="champi">
                <div class="champi__image">
                <img src={thresh}></img>
                </div>
                <div class="champi__text">
                <h2 className="champi__title">Champions</h2>
                <h2 className="champi__sub">Look through our always <span className="hl">up-to-date</span><br></br> 
                information about champions.</h2>
                </div>
                <a href="/rotation" className="champ__btn parallelo"><span className="skew">
                   CHAMPIONS
                   </span>
                </a>
                 </section>
        </main>
        <main className="l-rotation">
        <div className="champrotation__header">
        </div>
        <section className="champrotation bd-grid" id="champi">
        <div class="champrotation__image">
                <img src={jinx}></img>
                </div>
                <div class="champrotation__text">
                <h2 className="champrotation__title">Champion <br></br>Rotation</h2>
                <h2 className="champrotation__sub">Want to know what champions<br></br> you can take into the <span className="hl">rift </span>
                next? <br></br> We have you covered.</h2>
                </div>
                <a href="#" className="champro__btn parallelo"><span className="skew">
                   CHAMP ROTATION
                   </span>
                </a>
        </section>
        </main>
        </div>
    
    
    )
}