import React from 'react'

class Bola extends React.Component {
    constructor(props) {
        super(props)
        this.state = {material: "couro"}
    }

    render() {
        return <h2>Eu tenho uma Bola de {this.state.material}</h2>
    }
}

export default Bola