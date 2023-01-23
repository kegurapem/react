import React from "react";

const Line = (props) => {
    return (
        <>
         <h3>Line Name: {props.lineName}</h3>
         <h3>Line Destination: {props.destination}</h3>
         <hr></hr>
        </>
    )
}

export default Line