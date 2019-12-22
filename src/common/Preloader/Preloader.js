import React from 'react'
//import classes from './Preloader.module.css'
import loader from "./../../assets/spinner.svg";

let Preloader = (props) => {
    return (<div>
        <img src={loader} alt="loader" />
    </div>)
}

export default Preloader