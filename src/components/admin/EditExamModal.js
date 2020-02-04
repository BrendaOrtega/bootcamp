import React, { useState, useEffect } from 'react'
import { Modal, Button, Input, DatePicker, Radio, Switch } from 'antd'
import styles from './admin.module.css'
import toastr from 'toastr'
import moment from 'moment'

let initialExam = {
    questions: []
}

export default function EditExamModal({ ex, onFinish, onCancel, visible = true }) {
    let [open, setOpen] = useState(false)
    let [question, setQuestion] = useState({ answers: [] })
    let [answer, setAnswer] = useState({})
    let [exam, setExam] = useState({ ...initialExam })

    useEffect(() => {
        if (ex) setExam({ ...ex })
    }, [ex])

    function openModal() {
        setOpen(true)
    }

    function onChangeExam({ target: { name, value } }) {
        setExam({ ...exam, [name]: value })
    }

    function onChangeQuestion({ target: { name, value } }) {
        setQuestion({ ...question, [name]: value })
    }

    function onChangeAnswer({ target: { name, value } }) {
        answer.text = value
        setAnswer({ ...answer })
    }

    function addAnswer(e) {
        e.preventDefault()
        question.answers.push({ ...answer, index: question.answers.length })
        setQuestion({ ...question })
        setAnswer({})
    }
    function saveQuestion() {
        console.log(question)
        if (!question.text || question.correct === undefined || question.answers.length < 4) {
            toastr.warning("completa el formulario porfavor")
            return
        }
        onComplete()
    }

    function onCorrect(index) {
        question.correct = index
        setQuestion({ ...question })
    }

    function onComplete() {
        if (question.index !== undefined) exam.questions.splice(question.index, 1, question)
        else exam.questions.push({ ...question, index: exam.questions.length })
        setExam({ ...exam })
        setQuestion({ answers: [] })
        setOpen(false)


    }

    function editQuestion(q, i) {
        return () => {
            setOpen(true)
            setQuestion({ ...q })
        }
    }

    function deleteQuestion() {
        console.log("a borrar: ", question)
        exam.questions.splice(question.index, 1)
        setExam({ ...exam })

        setQuestion({ answers: [] })
        setOpen(false)
    }

    function saveExam() {
        onFinish({ ...exam })
    }

    return (
        <Modal
            visible={visible}
            onCancel={onCancel}
            onOk={saveExam}
        >
            <h2>Examen</h2>
            <form className={styles.modalContainer}>
                <label>
                    Activar examen
                    <Switch checked={exam.active} onChange={value => onChangeExam({ target: { name: "active", value } })} />
                </label>
                <label>
                    Título
                <Input name="title" value={exam.title} onChange={onChangeExam} placeholder="Título del examen" />
                </label>
                <label>
                    Descripción
                <Input name="description" value={exam.description} onChange={onChangeExam} placeholder="Descripción" />
                </label>
                <label>
                    Imagen
                <Input name="photoURL" value={exam.photoURL} onChange={onChangeExam} placeholder="photoURL" />
                </label>
                <label>
                    Fecha de inicio
                    <br />
                    <DatePicker value={moment(exam.startDate)} onChange={value => onChangeExam({ target: { name: "startDate", value } })} />
                </label>
                <label>
                    Fecha de termino
                    <br />
                    <DatePicker value={moment(exam.endDate)} onChange={value => onChangeExam({ target: { name: "endDate", value } })} />
                </label>

                <div>
                    <p>Preguntas:</p>
                    <div>
                        {exam.questions.map((q, i) => {
                            return (
                                <p
                                    style={{ cursor: "pointer" }}
                                    onClick={editQuestion(q, i)} key={i}>
                                    {q.text}
                                </p>
                            )
                        })}
                    </div>

                    <Button
                        onClick={openModal}
                    >
                        +
                    </Button>
                </div>

            </form>

            <Modal
                onCancel={() => setOpen(false)}
                visible={open}
                onOk={saveQuestion}
            >
                <h2>Agrega una pregunta</h2>
                <Input value={question.text} onChange={onChangeQuestion} name="text" placeholder="Pregunta" />
                <div>
                    <Radio.Group onChange={({ target: { value } }) => onCorrect(value)}>
                        {question.answers.map((o, i) => {
                            return (
                                <Radio key={i} value={i}>
                                    {o.text}
                                </Radio>
                            )
                        })}
                        <Button onClick={() => setQuestion({ ...question, answers: [] })} icon="delete" />
                    </Radio.Group>

                </div>
                <form onSubmit={addAnswer}>
                    <Input value={answer.text} onChange={onChangeAnswer} placeholder="Agrega una respuesta" />
                    <span>Presiona enter</span>
                </form>
                {question.index !== undefined && <Button onClick={deleteQuestion} type="danger">
                    Eliminar Pregunta
                </Button>}
            </Modal>

        </Modal>
    )
}