import React from 'react'

class MeuFormulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nomeUsuario: '',
      idade: null
    }
  }

  meuManipuladorMudanca = (event) => {
    let nome = event.target.name
    let valor = event.target.value
    console.log("atributo name: " + event.target.name + " | valor digitado: " + event.target.value)
    this.setState({[nome]: valor})
  }

  meuManipuladorEnvio = (event) => {
    event.preventDefault()
    let idade = this.state.idade
    if (!Number(idade)){
      alert("A sua idade deve ser um número!")
    }
  }

  render(){
    return (
      <form onSubmit={this.meuManipuladorEnvio}>
        <h1>Olá, {this.state.nomeUsuario} {this.state.idade}</h1>
        <p>Digite o seu nome: </p>
        <input type="text" name="nomeUsuario" onChange={this.meuManipuladorMudanca}/>
        <p>Digite a sua idade: </p>
        <input type="text" name="idade" onChange={this.meuManipuladorMudanca}/>
        <br/><br/>
        <input type="submit"/> 
      </form>
    )
  }
}

export default MeuFormulario