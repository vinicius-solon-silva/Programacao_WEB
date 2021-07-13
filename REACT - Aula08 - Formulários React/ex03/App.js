import React from 'react';

class MeuFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUsuario: ''
    };
  }

  meuManipuladorMudanca = (event) => { //pode ser qualquer nome de variavel, usamos event por convenção
    console.log(event.target.value)
    // event.target.value: define ou retorna o valor de um atributo.
    this.setState({nomeUsuario: event.target.value})
  }

  render(){
    let cabecalho = ''
    if (this.state.nomeUsuario){
      cabecalho = <h1>Olá, {this.state.nomeUsuario}</h1>
    } else{
      cabecalho = ''
    }
    return (
      <form>
        {cabecalho}
        <p>Digite o seu nome: </p>
        <input type="text" onChange={this.meuManipuladorMudanca}/>
      </form>
    )
  }
}

export default MeuFormulario