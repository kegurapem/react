import React from "react"
import Line from "./Line.jsx"

const lines = [
    {
        lineName: "A",
        destination: "Estacion H"
    },
    {
        lineName: "B",
        destination: "Estacion G"
    },
    {
        lineName: "C",
        destination: "Estacion P"
    },
    {
        lineName: "D",
        destination: "Estacion S"
    },
]

function Network (props) {
    return (
        <>
            {
                lines.map(line => <Line lineName={line.lineName} destination={line.destination}/>)
            }
        </>
    )
}

export default Network