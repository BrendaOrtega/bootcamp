import React from 'react'
import styles from './exam.module.css'

export default function Question({ onNext, answer, onClick, time, text, answers }) {
    function renderAnswer(a, i) {
        return (
            <div onClick={onClick(a)} className={answer === a.index ? styles.active : styles.answer} key={i}>
                {a.text}
            </div>
        )
    }
    return (
        <div className={styles.question}>
            <span>Tiempo restante:</span>
            <h2 className={styles.time}>
                {time}
            </h2>
            <p>
                {text}
            </p>
            <div className={styles.answers}>
                {answers.map(renderAnswer)}
            </div>
            <button onClick={onNext}>
                Siguiente
            </button>
        </div>
    )
}

Question.defaultProps = {
    text: "¿Cual es el nombre de esta plataforma?",
    answers: [
        {
            index: 0,
            text: "Fixter es una platafomra chirga"
        },
        {
            index: 1,
            text: "Geek"
        },
        {
            index: 2,
            text: "FixterGeek"
        },
        {
            index: 3,
            text: "Plazi"
        },
    ]
}