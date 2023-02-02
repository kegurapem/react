import React from "react"
import style from './Leftbar.module.css'

function Leftbar (props) {
    return (
        <>
            <ul className={`${style.ul}`}>
                <li>{props.name}</li>
            </ul>
        </>
    )
}

export default Leftbar