import React from 'react';

class Futebol extends React.Component {
  
  lancar(a){
    alert(a)
  }
  
  render(){
    return (
      <button onClick={this.lancar.bind(this, "Gol!!! Flavinho do pneu")}>Tente o lance!</button>
    )
  }
}


export default Futebol;