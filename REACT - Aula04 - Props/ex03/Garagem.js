import React from 'react';
import Carro from './Carro.js';

class Garagem extends React.Component {
    render() {
        const nome_carro = "Ford"
        
        return <div>
            <h1>Quem está na garagem?</h1>
            <Carro marca={nome_carro}/>
        </div>
    }
}

export default Garagem;