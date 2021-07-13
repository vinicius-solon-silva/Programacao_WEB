import React from 'react'
import Aluno from './Aluno'

class Faculdade extends React.Component {
    render() {
        return (<div>
                    <h1>Quem está na Faculdade?</h1>
                    <Aluno/>
                </div>)
    }
}

export default Faculdade