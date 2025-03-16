import React, { useContext } from "react";
import './NavBar.css'
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const NavBar = () =>{
    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event) => {
        switch (event.target.value){
            case "usd": {
                setCurrency({name:"usd", symbol:"$"})
                break;
            }
            case "eur": {
                setCurrency({name:"eur", symbol:"€"})
                break;
            }
            default: {
                setCurrency({name:"eur", symbol:"€"})
                break;
            }
        }
    }

    return(
        <div className="navbar">
            <Link to={'/'}>
            
            <img src="" alt=""/>
            </Link>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <li>Features</li>
                <li>Pricing</li>
            </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
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