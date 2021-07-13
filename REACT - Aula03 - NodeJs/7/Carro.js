import React from 'react';

class Carro extends React.Component {
    render() {
        return <h2>Eu sou um Carro {this.props.cor} ! Sem ponto e vírgula XD</h2>
    }
}

export default Carro