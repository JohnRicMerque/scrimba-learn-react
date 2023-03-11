import React from "react"
import reactLogo from './assets/react.svg'
import './NavBar.css'

export default function NavBar(){
    return (
        <nav>
            <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h3>React Facts</h3>
            <h4>React Course-Project 1</h4>
        </nav>
    )
}