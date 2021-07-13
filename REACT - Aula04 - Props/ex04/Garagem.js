import React from 'react';
import Carro from './Carro.js';

class Garagem extends React.Component {
    render() {
        const info_carro = {nome: "Ford", modelo: "Mustang"}

        return <div>
            <h1>Quem está na garagem?</h1>
            <Carro marca={info_carro}/>
        </div>
    }
}

export default Garagem;