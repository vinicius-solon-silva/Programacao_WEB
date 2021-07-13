import React from 'react'
import Nome from './Nome'
import Idade from './Idade'

class Identificacao extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor")
        this.state = {
            nome: "Carla Alves",
            idade: 15
        }
    }

    // método de ciclo de vida de um componente React (componente montado).
    componentDidMount(){
        console.log("componentDidMount")
        this.setState({nome: "João Alves"})
    }

    render(){
        console.log("render")
        return (
            <div>
                <Nome nome={this.state.nome}/>
                <Idade idade={this.state.idade}/>
            </div>
        )
    }
}

export default Identificacao