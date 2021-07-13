import React from 'react'

class MeuFormulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {nomeUsuario: ''}
  }

  meuManipuladorMudanca = (event) => { //pode ser qualquer nome de variavel, usamos event por convenção
    console.log("meuManipuladorMudanca -> "+event.target.value)
    // event.target.value: define ou retorna o valor de um atributo.
    this.setState({nomeUsuario: event.target.value})
  }

  meuManipuladorEnvio = (event) => {
    // Evita que um link abra uma URL.
    event.preventDefault()
    console.log("meumanipuladorEnvio -> " + this.state.nomeUsuario)
    alert('Você está enviando ' + this.state.nomeUsuario)
  }

  render(){
    return (
      <form onSubmit={this.meuManipuladorEnvio}>
        <h1>Olá, {this.state.nomeUsuario}</h1>
        <p>Digite o seu nome e envie: </p>
        <input type="text" onChange={this.meuManipuladorMudanca}/>
        <input type="submit"/>
      </form>
    )
  }
}

export default MeuFormulario