import React, { useState } from 'react'
import Start from './Start'
import styles from './exam.module.css'
import Question from './Question'
import questions from './questions.json'

let exam = {}

export default function ExamPage({ exam = {
    questions
} }) {
    let [step, setStep] = useState(1)
    let [question, setQuestion] = useState(exam.questions[0])
    let mins = 30
    let secs = 0
    let [time, setTime] = useState(`${mins}:0${secs}`)
    let interval
    let [answer, setAnswer] = useState(null)

    function startExam() {
        setStep(1)
        interval = setInterval(() => {
            if (mins === 0 && secs === 0) {
                clearInterval(interval)
                return timesUp()
            }
            if (secs === 0) {
                mins -= 1
                secs = 59
            }
            else {
                secs -= 1
            }
            let m = mins < 10 ? `0${mins}` : mins
            let s = secs < 10 ? `0${secs}` : secs
            setTime(`${m}:${s}`)
        }, 1000)
    }

    function timesUp() {
        alert("ya valio")
    }
    function onClickAnswer(a) {
        return () => {
            setAnswer(a.index)
        }
    }
    function onNext() {
        if (!answer) return
        //cambia esto
        setQuestion(exam.questions[1])
        setAnswer(null)
    }
    return (
        <div className={styles.container}>
            {step === 0 && <Start onStart={startExam} {...exam} />}
            {step === 1 && <Question onNext={onNext} onClick={onClickAnswer} answer={answer} time={time} {...question} />}
        </div>
    )
}