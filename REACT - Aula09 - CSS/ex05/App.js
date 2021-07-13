import React from 'react'
import styles from './meuestilo.module.css'

class Carro extends React.Component {
  
  render(){
    return (
      <div>
        <h1 className={styles.bigblue}>Olá Carro!</h1>
        <p>Acicione um pouco de estilo, AAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
      </div>
    )
  }

}

export default Carro