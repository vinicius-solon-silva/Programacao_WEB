import React from 'react'
import CompA from './CompA'
import CompB from './CompB'

class App extends React.Component {
  
  render(){
    return(
      <div>
        <CompA/>
        <CompB/>
      </div>
    )
  }

}

export default App