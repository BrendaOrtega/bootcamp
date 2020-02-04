import React, { useRef, useState } from 'react'
import { Modal, Button, Radio } from 'antd'
import ReactMarkdown from 'react-markdown/with-html'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { connect } from 'react-redux'
import { updateProfileAction } from '../../redux/userDuck'

const CodeBlock = ({ language = "javascript", value }) => (
    <SyntaxHighlighter language={language}>
        {value}
    </SyntaxHighlighter>
)

let portada = require('../../assets/portada.jpg')

function HomeWork({ updateProfileAction, uHomework, user, onOk, onCancel, homework, visible = true }) {
    let { title, description, link } = homework
    let video = useRef()
    let [response, setResponse] = useState(null)
    let [wrong, setWrong] = useState(false)
    let [attempts, setAttempt] = useState(1)

    function ok(e) {
        if (video.current) video.current.pause()
        onOk(e)
    }

    function tryResponse() {
        let u = { ...user }
        if (!u.homeworks) u.homeworks = {}
        if (attempts < 3 && response !== homework.answer) {
            setWrong(true)
            setAttempt(attempts + 1)
        } else if (attempts > 2 && response !== homework.answer) {
            u.homeworks[homework._id] = {
                attempts,
                correct: false,
                response,
                question: homework.question,
                id: homework._id,
                date: Date.now()
            }
            updateProfileAction({ ...u })
            setAttempt(1)
        } else if (attempts < 4 && response === homework.answer) {
            u.homeworks[homework._id] = {
                attempts,
                correct: true,
                response,
                question: homework.question,
                id: homework._id,
                date: Date.now()
            }
            updateProfileAction({ ...u })
            setAttempt(1)
        }

    }

    return (
        <Modal
            style={{ minWidth: "80vw" }}
            onCancel={onCancel}
            footer={<Button type="primary" onClick={ok} >Ok</Button>}
            title={title}
            visible={visible}
        >
            {link && <video ref={video} poster={portada} style={{ width: "100%" }} src={link} controls></video>}
            <div className='markdown-body'>
                <ReactMarkdown
                    renderers={{
                        code: CodeBlock,
                    }}
                    source={description}
                    escapeHtml={false} />
            </div>
            <div>
                <br /><br />
                <p>
                    Escoge la mejor respuesta:
                </p>
                <h2>
                    {homework.question}
                </h2>
                {homework.options && <Radio.Group
                    placeholder="Respuestas"
                    name="answer"
                    onChange={({ target: { value } }) => setResponse(value)}
                    value={(uHomework && uHomework.response) || response}>
                    {homework.options.map((option, i) => {
                        return (
                            <p>
                                <Radio value={option}>
                                    {option}
                                </Radio>
                            </p>

                        )
                    })}
                    <p style={{ color: wrong ? "red" : null }} >Intento {uHomework ? uHomework.attempts : attempts} de 3</p>
                    {!uHomework ? <Button
                        onClick={tryResponse}
                        disabled={!response} >
                        Responder
                        </Button> : <h2 >Has respondido {uHomework.correct ? <span style={{ color: "green" }}>Correctamente</span> : <span style={{ color: "red" }}>Erroneamente</span>} </h2>}
                </Radio.Group>}
            </div>
        </Modal >
    )
}

function mapState({ user }, props) {
    let uHomework
    if (user.homeworks) uHomework = user.homeworks[props.homework._id]
    return {
        user,
        uHomework
    }
}

export default connect(mapState, { updateProfileAction })(HomeWork)