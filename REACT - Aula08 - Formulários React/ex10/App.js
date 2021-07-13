import React from 'react'

class MeuFormulario extends React.Component {

  constructor(props) {
    super(props)
    // o valor selecionado do 'select' é inicializado no 'constructor'
    this.state = {
      meuCarro: 'Volvo'
    }
  }

  render(){
    return (
      <form>
        <select value={this.state.meuCarro}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option> 
          <option value="Fiat">Fiat</option> 
        </select>
      </form>
    )
  }
}

export default MeuFormulario