import React from 'react'
import Navbar from '../components/Navbar'
import DisplayChampion from '../components/DisplayChampion'
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Champion() {
    return (
        <div>
            <Navbar/>
            <div className="championinf">
            <DisplayChampion/>
            </div>
        </div>
    )
}