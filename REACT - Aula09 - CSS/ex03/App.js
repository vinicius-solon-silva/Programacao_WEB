import React from 'react'

class MeuCabecalho extends React.Component {
  
  render(){
    const meuEstilo = {
      color: "gold",
      backgroundColor: "DodgerBlue",
      padding: "50px",
      fontFamily: "Lucida Handwriting"
    }
    return (
     <div>
       <h1 style={meuEstilo}>Olá Estilo!</h1>
       <p>Adicione um pouco de estilo, pfv... ;-;</p>
     </div> 
    )
  }

}

export default MeuCabecalho