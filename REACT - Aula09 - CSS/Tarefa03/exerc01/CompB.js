import React from 'react'
import styles from './estilo.module.css'

class CompB extends React.Component {

    render() {
        return (
            <div>
                <h2 className={styles.green}>Texto do CompB</h2>
            </div>
        )
    }
}

export default CompB