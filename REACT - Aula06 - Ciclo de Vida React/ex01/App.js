import React from 'react';

class App extends React.Component {
  // Montando componente (mounting)

  constructor(props) {
    super(props);
    this.state = {
      nome: "João"
    };
    console.log("constructor");
  }
  

  // Montando (mounting)
  componentDidMount(){
    console.log("componentDidMount - Montando");
  }

  // Atualizando (updating)
  componentDidUpdate(){
    console.log("componentDidUpdate - Atualizando");
  }

  /* Desmontando (unmounting)
    Qualquer limpeza necessária deve ser realizada neste método, como invalidar 
    timers, cancelar requisições de rede, ou limpar qualquer subscrição que foi 
    criada no componentDidMount();
  */
  componentWillUnmount(){
    console.log("componentWillUnmount - Desmontando");
  }

  alterar =()=> {
    // Atualizando - o componente será renderizado novamente.
    this.setState({nome: "Maria"});
    console.log("arrow function alterar");
  }

  // Montando (mounting) e atializando (updating).
  render(){
    console.log("render");
    return(
      <div>
        Olá, {this.state.nome}!<br/><br/>
        <div>
        <button onClick={this.alterar}>Alterar</button>
        </div>
      </div>
    )
  }
}

export default App