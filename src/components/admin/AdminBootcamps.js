import React, { useState } from 'react'
import { Card, Icon, Avatar } from 'antd';
import { connect } from 'react-redux'
import { setEditingBootcampAction } from '../../redux/adminDuck'
import { saveExamAction } from '../../redux/bootcampDuck'
import EditExamModal from './EditExamModal';

const { Meta } = Card;

let initialExam = {
    questions: [],
    active: true
}

function AdminBootcamps({ saveExamAction, bootcamps, history, setEditingBootcampAction }) {
    let [open, setOpen] = useState(false)
    let [exam, setExam] = useState({ ...initialExam })

    function editBootcamp(_id) {
        setEditingBootcampAction(_id)
        history.push('/admin/bootcamps/' + _id)
    }

    function openExam(ex, _id) {
        if (!ex) ex = { ...initialExam, bootcamp: _id }
        setExam(ex)
        setOpen(true)
    }

    function saveExam(exam) {
        console.log("enviado: ", exam)
        saveExamAction(exam)
        setOpen(false)
    }

    function renderCard({ title, _id, exam }, i) {
        return (
            <Card
                key={i}
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://pbs.twimg.com/media/DM19m2yVoAAqynT.jpg"
                    />
                }
                actions={[
                    <Icon onClick={() => openExam(exam[0], _id)} spin type="setting" key="setting" />,
                    <Icon onClick={() => editBootcamp(_id)} type="edit" key="edit" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYWWwEjIv6aZv2rGTFi1Syq70-NYSxUmkyMQ_48fPYsTXu9GV&s" />}
                    title={title}
                    description={_id}
                />
            </Card>
        )
    }

    return (
        <div >
            <h1>Bootcamps</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {bootcamps.map(renderCard)}

            </div>

            <EditExamModal onFinish={saveExam} ex={exam} visible={open} onCancel={() => setOpen(false)} />
        </div>
    )
}

function mapState({ bootcamps: { array } }) {
    return {
        bootcamps: array
    }
}

export default connect(mapState, { saveExamAction, setEditingBootcampAction })(AdminBootcamps)