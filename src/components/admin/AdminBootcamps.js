import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import { connect } from 'react-redux'
import { setEditingBootcampAction } from '../../redux/adminDuck'

const { Meta } = Card;



function AdminBootcamps({ bootcamps, history, setEditingBootcampAction }) {
    // login?

    function editBootcamp(_id) {
        setEditingBootcampAction(_id)
        history.push('/admin/bootcamps/' + _id)
    }

    function renderCard({ title, _id }, i) {
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
                    <Icon spin type="setting" key="setting" />,
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
        </div>
    )
}

function mapState({ bootcamps: { array } }) {
    return {
        bootcamps: array
    }
}

export default connect(mapState, { setEditingBootcampAction })(AdminBootcamps)