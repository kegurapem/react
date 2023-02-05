import React from "react"
import { useState } from "react"

const Funcional = (props) => {

    const [contador, setContador] = useState(100)
    const [text, setText] = useState('')

    const aumentar = () => {
        setContador(contador + 1)
    }

    const changeHandler = (event) => {
        setText(event.target.value)
    }

    return(
        <>
            <h1>Soy un componente Funcional</h1>
            <p>{props.text}</p>
            <div>
                <h3>{text}</h3>
                <input type="text" onChange={changeHandler}/>
            </div>
            <h3>{contador}</h3>
            <button onClick={aumentar}>AUMENTAR</button>
        </>
    )
}

export default Funcional