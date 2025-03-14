import React from "react";
import './NavBar.css'


const NavBar = () =>{
    return(
        <div className="navbar">
            <img src="" alt=""/>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
            </ul>
        <div className="nav-right">
            <select>
                <option value="usd">
                    USD
                </option>
                <option value="eur">
                    EUR
                </option>
            </select>
            <button>Sign Up</button>
        </div>
        </div>
    )
}

export default NavBar