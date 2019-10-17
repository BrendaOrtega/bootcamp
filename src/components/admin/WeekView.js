import React, { useEffect, useState } from 'react'
import { Card, Button, Modal, Input, Tooltip } from 'antd'
import { connect } from 'react-redux'
import { setEditingBootcampAction } from '../../redux/adminDuck'
import { addWeekAction, getBootcampAdminAction } from '../../redux/bootcampDuck'


function WeekView({ getBootcampAdminAction, addWeekAction, setEditingBootcampAction, match, history, bootcamp }) {
    let [show, setShow] = useState(false)
    let [newWeek, setNewWeek] = useState({})
    useEffect(() => {
        let { id } = match.params
        if (id) {
            setEditingBootcampAction(id)
            getBootcampAdminAction(id)
        }
    }, [])

    useEffect(() => {
    }, [newWeek])
    // login?

    function renderWeek(item, i) {
        return (
            <Card.Grid
                key={i} style={gridStyle}>{item.title}<br />
                {item.description}
                <br />
                <Tooltip title="Learnings">
                    <Button
                        onClick={() => {
                            history.push(`/admin/weeks/${item._id}`)
                        }}
                        icon="file-markdown" key="learnings" />
                </Tooltip>
                <Tooltip title="Homeworks">
                    <Button
                        onClick={() => {
                            history.push(`/admin/weeks/${item._id}/homework`)
                        }}
                        icon="carry-out" key="homework" />
                </Tooltip>
            </Card.Grid>
        )
    }

    function addWeek() {
        if (!newWeek.title || !newWeek.description) return
        let week = { ...newWeek }
        week.bootcamp = bootcamp._id
        setNewWeek({ ...newWeek, ...week })
        setShow(false)
        addWeekAction(week)
    }

    function onChangeWeek({ target: { name, value } }) {
        setNewWeek({ ...newWeek, [name]: value })
    }

    return (
        <div >
            <h1>Weeks of {bootcamp.title}</h1>
            <Button onClick={() => setShow(true)} type="dashed">Agregar semana</Button>
            <br />
            <br />
            <Card title="Semanas programadas">
                {bootcamp.weeks && bootcamp.weeks.map(renderWeek)}
                {(!bootcamp.weeks || bootcamp.weeks.length < 1) && <h3>No hay semana programadas</h3    >}
            </Card>
            <Modal
                onOk={addWeek}
                title={"Agregar Semana"}
                onCancel={() => setShow(false)}
                visible={show}
            >
                <Input
                    placeholder="Título de la semana"
                    name="title"
                    onChange={onChangeWeek}
                />
                <Input
                    placeholder="Descripción"
                    name="description"
                    onChange={onChangeWeek}
                />

            </Modal>
        </div >
    )
}

const gridStyle = {
    width: '25%',
    textAlign: 'center',
    cursor: "pointer"
};

function mapState({ bootcamps: { object }, admin: { editingBootcamp } }) {
    return {
        bootcamp: object[editingBootcamp] || { title: "No haz seleccionado bootcamp" }
    }
}

export default connect(mapState, { getBootcampAdminAction, addWeekAction, setEditingBootcampAction })(WeekView)