import React from 'react'

class Relogio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    render() {
        return <h1>Agora é {this.state.date}</h1>
    }

}

export default Relogio