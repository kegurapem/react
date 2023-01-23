import React from "react";
import style from "../components/Line.module.css"

const Line = (props) => {
    console.log(`Esto es style: ${style}`);
    return (
        <div>
         <h3 className={`${style.h3}`}>Line Name: {props.lineName}</h3>
         <h3>Line Destination: {props.destination}</h3>
         <hr></hr>
        </div>
    )
}

export default Line