import React from 'react'
import styles from './estilo.module.css'

class CompA extends React.Component {

    render() {
        return (
            <div>
                <h2 className={styles.red}>Texto do CompA</h2>
            </div>
        )
    }
}

export default CompA