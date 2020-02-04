import React from 'react'
import { Spin, Button } from 'antd'
import styles from './exam.module.css'
import { certificateGenerator } from './Cert'

let web = require('../../assets/ConstanciaWeb.png')

export default function Grading({ user, fetching, waiting, result }) {
    function generateCert() {
        certificateGenerator(web, null, user.displayName)
    }

    if (!fetching && !waiting && result) {
        return (<div className={styles.grading}>
            <h1>Tu resultado:</h1>
            <h2 className={result.approved ? styles.yes : styles.no} >{result.string}</h2>
            {<p>{result.approved ? "¡Aprobaste!, puedes descargar tu certificado" :
                "No aprobaste, el certificado solo está disponible si apruebas"}</p>}
            {result.approved && <Button type="danger" onClick={generateCert} >
                Descarga tu certificado
                </Button>}
        </div>)
    }
    return (<div className={styles.grading}>
        <h1>Calificando</h1>
        <Spin />
    </div>)
}

Grading.defaultProps = {
    result: {
        grade: "8/15",
        approved: false
    }
}