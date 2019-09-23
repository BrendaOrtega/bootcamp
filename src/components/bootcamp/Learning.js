import React, { useRef } from 'react'
import { Modal, Button } from 'antd'
import ReactMarkdown from 'react-markdown/with-html'
import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeBlock = ({ language = "javascript", value }) => (
    <SyntaxHighlighter language={language}>
        {value}
    </SyntaxHighlighter>
)

let portada = require('../../assets/portada.jpg')

export default function Learning({ onOk, onCancel, learning, visible = true }) {
    let { title, description, link } = learning
    let video = useRef()

    function ok(e) {
        if (video.current) video.current.pause()
        onOk(e)
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
        </Modal>
    )
}