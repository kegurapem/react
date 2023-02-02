import React from "react"
import Leftbar from  './Leftbar'
import Rightbar from './Rightbar'
import style from './Navbar.module.css'

function Navbar (props) {
    return (
        <div className={`${style.divNavbar}`}>
            <Leftbar name='Kevin Harold Gutierrez Ramirez'/>
            <Rightbar/>
        </div>
    )
}

export default Navbar