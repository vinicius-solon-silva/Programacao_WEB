import React from 'react';

class Carro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cor: "preto"};
    }
     
    render() {
        return <h2>Eu tenho um carrao {this.state.cor}! :D </h2>
    }
}

export default Carro;