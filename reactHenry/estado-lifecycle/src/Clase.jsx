import React from "react"

class Clase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 100
        }

        this.contador2 = 0

        // aumentar el estado
        this.clickHandler1 = () => {
            this.setState({contador: this.state.contador + 1}, () => {
                console.log("Se cambio el estado")
                console.log("Ahora es...")
                console.log(this.state.contador)
            })
        }

        // aumentar la variable
        this.clickHandler2 = () => {
            this.contador2 = this.contador2 + 1
            console.log(this.contador2)
        }
    }

    render() {
        return(
            <>
                <h1>Soy un componente de Clase</h1>
                <p>{this.props.text}</p>
                <button onClick={this.clickHandler1}>Aumentar estado</button>
                <button onClick={this.clickHandler2}>Aumentar Variable</button>
                <h3>{this.state.contador}</h3>
                <h3>{this.contador2}</h3>
            </>
        )
    }
}

export default Clase