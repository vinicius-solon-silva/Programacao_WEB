import React from 'react';
import Carro from './Carro'

class Garagem extends React.Component {
    render() {
        return <div>
            <h1>Quem está na garagem?</h1>
            <Carro marca="Wolkswagen"/>
        </div>
    }
}

export default Garagem