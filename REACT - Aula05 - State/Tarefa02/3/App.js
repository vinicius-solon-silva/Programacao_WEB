import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        num: 100
    }

}

incrementa = () => {
    this.setState ({num: this.state.num + 1})
}

decrementa = () => {
    this.setState({num: this.state.num - 1})
}

render() {
    return (
        <div>
            <button type="button" onClick={this.incrementa}>Incrementa</button>
            <p>O valor contado é: {this.state.num}</p>
            <button type="button" onClick={this.decrementa}>Decrementa</button>
        </div>
    )
}
}

export default App;
