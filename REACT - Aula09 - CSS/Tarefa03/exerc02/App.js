import React from 'react'

class App extends React.Component {
  
  render(){
    const meuEstilo = {
      color: "white",
      backgroundColor: "black",
      padding: "10px"
    }
    return (
     <div>
       <h2 style={meuEstilo}>Texto do componente</h2>
     </div> 
    )
  }

}

export default App