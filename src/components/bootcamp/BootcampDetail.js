import React, { useEffect, useState } from 'react';
import "./Bootcamp.css"
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { CardLessons } from "./CardLessons";
import FontAwesome from "react-fontawesome"
import js from "../../assets/JavaScript-logo.png"
import { Tabs, Spin } from 'antd';
import { CardTask } from "./CardTask";
import { connect } from 'react-redux'
import moment from 'moment';
import { getBootcampAction } from '../../redux/bootcampDuck'
import Learning from './Learning';

const { TabPane } = Tabs;

function callback(key) {
}
const BD = ({ history, getBootcampAction, subscribed, match, bootcamp = { students: 0, weeks: [{ learnings: [], itemsOrder: [] }] } }) => {

    let [activeWeek, setActiveWeek] = useState(0)
    let [learning, setLearning] = useState({})
    let [modal, showModal] = useState(false)

    useEffect(() => {
        // get bootcmp with or without learnings
        let { id } = match.params
        if (id) getBootcampAction(id)

        //let index = localStorage.activeWeek
        //if (index) setActiveWeek(index)
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

    let learnings = {}
    let order = []
    if (!bootcamp) return null
    if (bootcamp.weeks[activeWeek].learnings) bootcamp.weeks[activeWeek].learnings.forEach(l => learnings[l._id] = l)
    order = bootcamp.weeks[activeWeek].itemsOrder
    return (
        <section className="camp">
            <div className="camp-descript">
                <div className="camp-info">
                    <div className="camp-banner" style={{ backgroundImage: `url(${"https://scontent.fmex6-1.fna.fbcdn.net/v/t31.0-8/28698604_1973144766082686_589124668727305128_o.jpg?_nc_cat=106&_nc_oc=AQnwFz_vHgdIYAyTU1FxakCgl3fkxvwbQBibZBanSW6jQ-KjRsV6IQnM-J1yFsWiD9M&_nc_ht=scontent.fmex6-1.fna&oh=1d59fb9f541cbc8f0126e1278b7d13b4&oe=5DA4579E"})` }}>

                    </div>
                    <div className="camp-avatar">
                        <img src={js} alt="logo-javascript" />
                    </div>
                    <div style={{ padding: "0 4%" }}>
                        <h3>Bootcamp Online: {bootcamp.title}</h3>
                        <p>{bootcamp.description} ⚛️</p>
                        <p> <FontAwesome name="user" /> {bootcamp.students.length + 152} Estudiantes</p>
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
                            <p className="textos">El Bootcamp tiene una duración de 5 semanas. ¡Recuerda! Semanlamente se liberará
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
                    <TabPane tab="Tareas" key="2">
                        <div className="box-lessons" style={{ padding: " 1% 2%" }}>
                            <CardTask week={bootcamp.weeks[activeWeek].title} date="Tarea 1: Setup del entorno de desarrollo [Por subir]" name="Introducción al Desarrollo Web" descript="Prework" />
                        </div>
                    </TabPane>
                    <TabPane style={{ paddingLeft: 20 }} tab="Recursos" key="3">
                        Esta semana no cuenta con recursos extra
                    </TabPane>
                    <TabPane style={{ paddingLeft: 20 }} tab="Exámen" key="4">
                        El examen estará disponible al finalizar el bootcamp
                    </TabPane>
                </Tabs>,




            </div>
            <Learning
                onOk={() => showModal(false)}
                learning={learning}
                visible={modal} />
        </section>
    );
};

function mapState({ bootcamps: { object } }, { match: { params: { id } } }) {
    let bootcamp = object[id]
    let subscribed = bootcamp ? bootcamp.weeks[0].learnings ? true : false : false
    return {
        bootcamp,
        subscribed
    }
}

export const BootcampDetail = connect(mapState, { getBootcampAction })(BD)
