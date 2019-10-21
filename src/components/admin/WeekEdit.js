import React, { useEffect, useState } from 'react'
import { Card, Button, Modal, Input, Progress, Icon, DatePicker, Switch } from 'antd'
import { connect } from 'react-redux'
import { setEditingBootcampAction } from '../../redux/adminDuck'
import { getWeekAdminAction, saveLearningAction, deleteLearningAction, updateCurrentWeekAction } from '../../redux/bootcampDuck'
import toastr from 'toastr'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import firebase from '../../firebase'
import moment from 'moment'
import 'moment/locale/es'
import locale from 'antd/es/date-picker/locale/es_ES';
const ReactMarkdown = require('react-markdown/with-html')


const { TextArea } = Input;
const { confirm } = Modal;

function WeekEdit({ updateCurrentWeekAction, error, deleteLearningAction, saveLearningAction, week, getWeekAdminAction, match }) {
    let [editing, setEditing] = useState(false)
    let [weekEditing, setWeekEditing] = useState(false)
    let [learning, setLearning] = useState({})
    let [video, setVideo] = useState(null)
    let [progress, setProgress] = useState(0)
    let [weekMod, setWeekMod] = useState({})
    let [mark, showMark] = useState(false)

    useEffect(() => {
        if (match.params.id) getWeekAdminAction(match.params.id)
    }, [])
    useEffect(() => {
        if (error) toastr.error(error)
    }, [error])
    useEffect(() => {
        console.log(weekMod)
    }, [weekMod])
    // login?

    function onChangeWeek({ target: { name, value } }) {
        setWeekMod({ ...weekMod, [name]: value })
    }

    function onChange({ target: { name, value } }) {
        setLearning({ ...learning, [name]: value })
    }
    function saveLearning() {
        setEditing(false)
    }

    function saveLearning() {
        if (!editing) {
            saveLearningAction({ week: week._id, title: "blissi", description: "bliss" })
        } else {
            saveLearningAction(learning)
        }
        setEditing(false)
    }

    function onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        // change order
        const items = reorder(
            week.learnings,
            result.source.index,
            result.destination.index
        );
        let w = { ...week }
        console.log(items)
        w.itemsOrder = items.map((item, i) => item._id)
        updateCurrentWeekAction(w)
        // set order in learning


    }

    function reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };


    function renderLearning(item, i) {
        if (!item) return null
        return (
            <Draggable key={item._id} draggableId={item._id} index={i}>
                {(provided, snapshot) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Card
                            style={styles.card}
                            key={i}
                            title={item.title}
                            extra={<a onClick={() => {
                                setEditing(true)
                                setLearning(item)
                            }} href="#">Ediar</a>}
                        >

                            <div>
                                <ReactMarkdown
                                    source={item.description && item.description.slice(0, 100) + "..."}
                                    escapeHtml={false}
                                />
                            </div>

                        </Card ></div>)}
            </Draggable>
        )
    }

    function showDeleteConfirm() {
        confirm({
            title: '¿Estas segur@ de borrar esta learning?',
            content: 'No podras recuperar el recurso',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                if (learning.link) {
                    firebase.storage().refFromURL(learning.link).delete()
                }
                deleteLearningAction(learning)
                setEditing(false)

            },
            onCancel() {

            },
        });
    }

    function uploadVideo({ target: { files } }) {
        let reader = new FileReader()
        let task = firebase.storage().ref('videoTest').child(`${learning._id}`).put(files[0])
        task.then(snap => {
            console.log(snap)
            return snap.ref.getDownloadURL()
        })
            .then(url => {
                setVideo(url)
                setLearning({ ...learning, link: url })
            })
        task.on('state_changed', function (snapshot) {
            var p = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(p)
        })


    }

    function editWeek(off) {
        if (off === "off") {
            setWeekEditing(false)
            updateCurrentWeekAction({ ...weekMod })
            return
        }
        setWeekEditing(true)
        setWeekMod({ ...week })
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>

                <div >
                    {!weekEditing && <div>
                        <h2>
                            {week.title}
                            <Icon onClick={editWeek} type="edit" theme="filled" />
                        </h2>
                        <p>{week.description}</p>
                        <p><b>Disponible:</b> {moment(week.startDate).format('llll')}</p>
                        <p><b>Finaliza:</b> {moment(week.endDate).format('llll')}</p>
                    </div>}
                    {weekEditing && <div >
                        <Input
                            name="title"
                            placeholder="Títlo de la semana"
                            onChange={onChangeWeek}
                            value={weekMod.title}
                        />
                        <TextArea
                            rows={4}
                            name="description"
                            placeholder="Descripción"
                            onChange={onChangeWeek}
                            value={weekMod.description}
                        />
                        Disonible a partir de:
                        <DatePicker
                            showTime
                            value={moment(weekMod.startDate)}
                            format={"DD-MM-YYYY"} locale={locale} placeholder="Selecciona una fecha" onChange={(date) => onChangeWeek({ target: { name: "startDate", value: date.toString() } })} />
                        Disonible hasta:
                        <DatePicker
                            value={moment(weekMod.endDate)}
                            format={"DD-MM-YYYY"}
                            locale={locale}
                            placeholder="Selecciona una fecha"
                            onChange={(date) => onChangeWeek({ target: { name: "endDate", value: date.toString() } })} />
                        <br />
                        Esta activa: <Switch checked={weekMod.active} onChange={checked => onChangeWeek({ target: { name: "active", value: checked } })} />
                        <br />
                        <Button onClick={() => editWeek("off")} icon="save" type="primary" />
                        <Button onClick={() => setWeekEditing(false)} icon="close" type="secondary" />
                    </div>}

                    <Button onClick={saveLearning} type="dashed">Agregar Learning</Button>
                    <br />
                    <br />
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={snapshot.isDraggingOver ? { background: "grey", padding: 40 } : null}
                            >

                                {week.learnings && week.learnings.map(renderLearning)}
                                {(!week.learnings || week.learnings.length < 1) && <h3>No hay learnings asignadas a esta semana</h3>}
                            </div>)}
                    </Droppable>
                    <Modal
                        footer={<div>
                            <Button style={{ float: "left" }} onClick={showDeleteConfirm} type="danger">Borrar</Button>
                            <Button onClick={() => {
                                setEditing(false)
                                setLearning({})
                                setVideo(null)
                            }} type="dashed">Cancelar</Button>
                            <Button onClick={saveLearning} type="primary">Ok</Button>
                        </div>}
                        title={`Editar ${learning.title}`}
                        visible={editing}
                    >
                        <Input
                            name="title"
                            placeholder="Título"
                            value={learning.title}
                            onChange={onChange}
                        />
                        <TextArea
                            rows={4}
                            onChange={onChange}
                            name="description"
                            placeholder="Markdown supported"
                            value={learning.description}
                        />
                        <Button
                            onClick={() => showMark(true)}
                            icon="desktop">Previsualizar</Button>
                        <Input
                            onChange={uploadVideo}
                            type="file"
                        />
                        <br />
                        <br />
                        {!video || !learning.link ? <Progress type="circle" percent={progress} width={100} /> :
                            null}
                        <br />
                        {learning.link ?
                            <video controls width="300" src={learning.link}></video> : null}


                    </Modal>
                    <Modal
                        style={{ minWidth: "80vw" }}
                        footer={<Button onClick={() => showMark(false)} type="primary" >Ok</Button>}
                        onCancel={() => showMark(false)}
                        visible={mark}
                    >
                        <ReactMarkdown
                            source={learning.description}
                            escapeHtml={false}
                        ></ReactMarkdown>
                    </Modal>
                </div >
            </DragDropContext>
        </div>
    )
}

const styles = {
    card: {
        marginBottom: 20
    }

};

function mapState({ bootcamps: { object, currentWeek, error }, admin: { editingBootcamp } }) {
    let w = { ...currentWeek }
    if (w.itemsOrder && w.itemsOrder.length > 0 && w.learnings && w.learnings.length > 0) {
        w.learnings = w.itemsOrder.map(i => w.learnings.find(l => l._id === i))
    }
    return {
        bootcamp: object[editingBootcamp] || { title: "No haz seleccionado bootcamp" },
        week: w,
        error
    }
}

export default connect(mapState, { deleteLearningAction, getWeekAdminAction, saveLearningAction, updateCurrentWeekAction })(WeekEdit)