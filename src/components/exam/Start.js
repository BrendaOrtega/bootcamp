import React, { useEffect, useState } from 'react'
import styles from './exam.module.css'
import FontAwesome from "react-fontawesome"
import moment from 'moment'


let song = require('../../assets/start.wav')

export default function Start({ startDate, attempts, title, onStart }) {
    let [audio, setAudio] = useState(new Audio())
    let [paused, setPaused] = useState(false)

    let available = false

    if (moment(startDate) < moment(Date.now())) available = true

    useEffect(() => {
        audio.src = song
        // audio.play()
    }, [])

    function muteSong() {
        if (audio.paused) {
            audio.play()
            setPaused(false)
        } else {
            audio.pause()
            setPaused(true)
        }
    }

    return (
        <div>
            <nav className={styles.nav}>
                <div>
                    <p>Examen para certificacion del curso:</p>
                    <h2>{title}</h2>
                </div>

                <button className={styles.audio} onClick={muteSong}>
                    <FontAwesome name={paused ? "volume-off" : "volume-up"} />
                </button>
            </nav>
            <div className={styles.startArea}>
                <div className={styles.flexRow}>
                    <p className={styles.flexColumn}>
                        <strong>{attempts ? attempts : 0}/2</strong>
                        <span>Intentos</span>
                    </p>
                    <h2>
                        Estas listo(a)?
                    </h2>
                    {available ? <button onClick={onStart}>
                        Comenzar
                    </button> : <button >
                            Examen disponible: {moment(startDate).format('ll')}
                        </button>}
                </div>
                <div>
                    <p style={{ textAlign: "justify", marginTop: 30 }}>
                        Tendrás únicamente 30 min para completar el examen,
                        debes responder correctamente el 80% de las preguntas.
                        <br />
                        En caso de fallar tienes un segundo intento.
                    </p>
                </div>
            </div>

        </div >
    )
}

Start.defaultProps = {
    title: "Fundamentos de programación con Python3"
}