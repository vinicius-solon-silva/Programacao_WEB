import React from 'react'

class Identificacao extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: "Vinny",
            sobrenome: "Solon",
            idade: 15
        }
    }

    render(){
        return (
            <div>
                <p>Nome: {this.state.nome}</p>
                <p>Sobrenome: {this.state.sobrenome}</p>
                <p>Idade: {this.state.idade}</p>
            </div>
        )
    }
}

export default Identificacao