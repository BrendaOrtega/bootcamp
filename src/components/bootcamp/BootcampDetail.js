import React, { useEffect, useState } from 'react';
import "./Bootcamp.css"
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { CardLessons } from "./CardLessons";
import FontAwesome from "react-fontawesome"
import js from "../../assets/JavaScript-logo.png"
import { Tabs, Badge } from 'antd';
import { CardTask } from "./CardTask";
import { connect } from 'react-redux'
import { getBootcampAction } from '../../redux/bootcampDuck'
import Learning from './Learning';
import HomeWork from './HomeWork'
import img from "../../assets/28698604_1973144766082686_589124668727305128_o.jpg"
import { Message } from "./chat/Message";
import { SendMessage } from "./chat/SendMessage";
import moment from 'moment'


const { TabPane } = Tabs;

function callback(key) {
}
const BD = ({ uHomeworks, history, getBootcampAction, subscribed, match, bootcamp = { students: 0, weeks: [{ homeworks: [], learnings: [], itemsOrder: [] }] } }) => {

    let [activeWeek, setActiveWeek] = useState(0)
    let [learning, setLearning] = useState({})
    let [homework, setHomework] = useState({})
    let [modal, showModal] = useState(false)
    let [hModal, showHmodal] = useState(false)

    useEffect(() => {
        // get bootcmp with or without learnings
        let { id } = match.params
        if (id) getBootcampAction(id)
            .then(() => {
                // no habia weeks todavia
                let index = localStorage.activeWeek
                if (index) setActiveWeek(Number(index))
            })


    }, [])

    function changeWeek(index) {
        setActiveWeek(index)
        localStorage.activeWeek = index
    }

    function showLearning(item) {
        if (!item || !item.tipo) return
        setLearning(item)
        showModal(true)
    }

    function showHomework(item) {
        if (!item || !item.tipo) return
        setHomework(item)
        showHmodal(true)
    }

    function renderHomeworkCard(item, i) {
        return (
            <CardTask
                uHomework={uHomeworks ? uHomeworks[item._id] : null}
                onClick={() => showHomework(item)}
                week={bootcamp.weeks[activeWeek].title} date="Tarea 1: Setup del entorno de desarrollo [Por subir]" name={item.title} descript="Prework" />
        )
    }

    let learnings = {}
    let order = []
    if (!bootcamp) return null
    if (bootcamp.weeks[activeWeek].learnings) bootcamp.weeks[activeWeek].learnings.forEach(l => learnings[l._id] = l)
    order = bootcamp.weeks[activeWeek].itemsOrder
    let homeworks = bootcamp.weeks[activeWeek].homeworks
    return (
        <section className="camp">
            <div className="camp-descript">
                <div className="camp-info">
                    <div className="camp-banner" style={{ backgroundImage: `url(${img})` }}>

                    </div>
                    <div className="camp-avatar">
                        <img src={js} alt="logo-javascript" />
                    </div>
                    <div style={{ padding: "0 4%" }}>
                        <h3>Bootcamp Online: {bootcamp.title}</h3>
                        <p>{bootcamp.description} ⚛️</p>
                        <p> <FontAwesome name="user" /> {bootcamp.students.length + 195} Estudiantes</p>
                        <p> <FontAwesome name="calendar" /> 5 semanas </p>
                        <p> <FontAwesome name="file" /> Exámen final  </p>
                        {subscribed ? <button className="btn-in">Inscrito</button> : <button onClick={() => history.push('/apply')} className="btn-in">Inscríbete</button>}
                    </div>
                </div>
                <div className="camp-dates">
                    {bootcamp.weeks.map((w, i) => {
                        let available = moment(w.startDate) < moment()
                        return (
                            <div
                                onClick={() => changeWeek(i)}
                                className={available ? activeWeek === i ? "camp-dates-week active" : "camp-dates-week" : "deactivated"}
                                key={i} >
                                <p>
                                    {w.title}
                                </p>
                                {available ? <FontAwesome name="chevron-right" /> : <FontAwesome name="lock" />}
                            </div>
                        )
                    })}


                </div>
            </div>
            <div className="camp-task">
                <Tabs defaultActiveKey="1" onChange={callback} >
                    <TabPane tab="Lecciones" key="1">
                        <div id="tp" className="summary">
                            <p className="textos">El Bootcamp tiene una duración de 5 semanas. ¡Recuerda! Semanalmente se liberará
                                el contenido correspondiente, por lo que aunque siempre tendrás acceso a las lecciones en video, no podrás subir tus tareas
                                al terminar la semana.
                            </p>
                            <div className="box-lessons">
                                {order.map((id, i) => {
                                    let text = "Semana del " + moment(bootcamp.weeks[activeWeek].startDate).format('ll') +
                                        " al " + moment(bootcamp.weeks[activeWeek].endDate).format('ll')
                                    return <CardLessons
                                        onClick={() => showLearning(learnings[id])}
                                        week={`Lección ${i + 1}`}
                                        date={text}
                                        name={learnings[id] && learnings[id].title}
                                        descript={bootcamp.weeks[activeWeek].title} />

                                })}

                            </div>
                        </div>

                    </TabPane>
                    <TabPane tab={<Badge count={homeworks && homeworks.length} >Tareas -</Badge>} key="2">
                        <div className="box-lessons"
                            style={{ flexWrap: "wrap", display: "flex", padding: " 1% 2%" }}>
                            {homeworks && homeworks.map(renderHomeworkCard)}
                        </div>
                    </TabPane>
                    {/* <TabPane style={{ paddingLeft: 20 }} tab="Recursos" key="3">
                        Esta semana no cuenta con recursos extra
                    </TabPane>
                    <TabPane className="tab-pad" tab="Ayuda" key="4">
                        <p>
                            Recibe ayuda relacionada a la semana activa del bootcamp directamente de un miembro de nuestro equipo.
                        </p>
                        <br/>
                      {/*  <section className="window-chat">
                            <div className="fix">
                                <Message/>
                            </div>
                            <div >
                                <SendMessage/>
                            </div>
                        </section>*/}
                    {/* </TabPane> */}

                    {activeWeek === 4 && <TabPane style={{ paddingLeft: 20, textAlign: "center" }} tab={<Badge count={"new"} >Examen -</Badge>} key="5">
                        <p>Completa el examen que se promediará con tus tareas para que puedas obtener tu certificado</p>
                        <h3
                            onClick={() => history.push(`/exam/${bootcamp._id}`)}
                            style={{
                                padding: 30,
                                color: "red",
                                textAlign: "center",
                                cursor: "pointer"
                                // border: "2px dashed red"
                            }} >
                            Resuelve tu examen aquí, o imprime tu certificado 📈
                            </h3>
                    </TabPane>}

                </Tabs>




            </div>
            <Learning
                onOk={() => showModal(false)}
                learning={learning}
                visible={modal} />
            <HomeWork onOk={() => showHmodal(false)}
                homework={homework}
                visible={hModal} />
        </section>
    );
};

function mapState({ user: { homeworks }, bootcamps: { object } }, { match: { params: { id } } }) {
    let bootcamp = object[id]
    let subscribed = bootcamp ? bootcamp.weeks[0].learnings ? true : false : false
    return {
        bootcamp,
        subscribed,
        uHomeworks: homeworks
    }
}

export const BootcampDetail = connect(mapState, { getBootcampAction })(BD)