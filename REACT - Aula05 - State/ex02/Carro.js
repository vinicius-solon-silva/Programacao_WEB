import React from 'react'

class Carro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            marca: "Ford",
            modelo: "Mustang",
            cor: "Vermelho",
            ano: 1964
        }

    }

    mudarCor = () => {
        this.setState({cor: "azul"})
    }

    render() {
        return (
            <div>
                <h1>Meu {this.state.marca}:</h1>
                <p>
                    Ele é um {this.state.modelo} {this.state.cor} de {this.state.ano}
                </p>
                <button type="button" onClick={this.mudarCor}>Mudar Cor</button>
            </div>
        )
    }
}

export default Carro