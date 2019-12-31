import React, { useState, useEffect } from 'react'
import Start from './Start'
import styles from './exam.module.css'
import Question from './Question'
import questions from './questions.json'
import { getExamAction, gradeExamAction } from '../../redux/bootcampDuck'
import { connect } from 'react-redux'
import Grading from './Grading'

let selected = require('../../assets/selected.wav')
let next = require('../../assets/next.wav')

function ExamPage({ grade, fetching, gradeExamAction, getExamAction, match, exam }) {
    let [finish, setFinish] = useState(false)
    let [answers, setAnswers] = useState([])
    let [step, setStep] = useState(0)
    let [question, setQuestion] = useState({})
    let mins = 30
    let secs = 0
    let [time, setTime] = useState(`${mins}:0${secs}`)
    let interval
    let [answer, setAnswer] = useState(undefined)
    let [index, setIndex] = useState(0)
    let [waiting, setWaiting] = useState(true)
    let audio = new Audio()
    audio.src = selected
    let audioNext = new Audio()
    audioNext.src = next

    useEffect(() => {
        let { id } = match.params
        let uid = "5dc1db06cd0b842984edca7c"
        getExamAction(uid)
    }, [])

    useEffect(() => {
        if (finish, answers.length === 4) {
            console.log("terminó", answers)
            setStep(2)
            gradeExam()
        }
    }, [answers, finish])

    function startExam() {
        setStep(1)
        setQuestion({ ...exam.questions[0] })
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
            audio.play()
            setAnswer(a.index)
        }
    }
    function onNext() {
        if (answer === undefined) {
            return
        }
        console.log(answer)
        setAnswers([...answers, answer])
        audioNext.play()
        setAnswer(undefined)
        if (index < exam.questions.length - 1) {
            setIndex(++index)
            setQuestion(exam.questions[index])
            return
        }
        setFinish(true)



    }

    function gradeExam() {
        gradeExamAction(answers, exam.bootcamp)
        setTimeout(() => {
            setWaiting(false)
        }, 10000);
    }

    return (
        <div className={styles.container}>
            {step === 0 && <Start onStart={startExam} {...exam} />}
            {step === 1 && <Question onNext={onNext} onClick={onClickAnswer} answer={answer} time={time} {...question} />}
            {step === 2 && <Grading grade={grade} waiting={waiting} fetching={fetching} />}
        </div>
    )
}

function mapState({ bootcamps: { exam, fetching, grade } }) {
    console.log(exam)
    return {
        exam,
        fetching,
        grade
    }
}

export default connect(mapState, { gradeExamAction, getExamAction })(ExamPage)