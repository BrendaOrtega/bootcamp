import React from 'react'
import FontAwesome from "react-fontawesome"
import js from "../../assets/JavaScript-logo.png"
import moment from 'moment'
import { withRouter } from 'react-router-dom'



function BootcampCard({ startDate, endDate, history, weeks, bootcamp, title, students = 100, _id, thumbnail }) {
    let available = false
    let week1 = false
    if (weeks && weeks[0] && (moment(weeks[0].startDate) < moment(Date.now()))) {
        available = true
    }
    if (weeks && weeks[1] && (moment(weeks[1].startDate) < moment(Date.now()))) {
        week1 = true
    }
    let link = "https://wallpaperplay.com/walls/full/3/c/4/164624.jpg"
    return (
        <div style={{ maxWidth: 320, marginRight: 10 }} className="camp-info">
            <div className="camp-banner" style={{ backgroundImage: `url(${link})` }}>

            </div>
            <div className="camp-avatar">
                <img src={thumbnail || js} alt="logo-javascript" />
            </div>
            <div style={{ padding: "0 4%" }}>
                <h3>Bootcamp Online: {title}</h3>
                <p>Crea las bases que necesitas para convertirte en desarrollador web y comenzar tu carrera profesional. ⚛️</p>
                <p> <FontAwesome name="user" /> {students.length + 152} Estudiantes</p>
                <p> <FontAwesome name="calendar" /> Inicia: <strong> {moment(startDate).format("ll")}</strong></p>
                <p> <FontAwesome name="calendar" /> Prework Disponible:  {available && <strong style={{ color: "green" }}>{moment(weeks[0].startDate).format('ll')}</strong> || <strong style={{ color: "green" }}> 11 de Noviembre, 2019</strong>}</p>
                <p> <FontAwesome name="file" /> Exámen final: <b>{endDate ? moment(endDate).format('ll') : "23 Noviembre 2019"} </b> </p>
                <button className="btn-in">
                    {week1 ? <span
                        onClick={() => history.push("/bootcamp/detail/" + _id)}
                    >¡Bootcamp Ya disponible!</span> : "Inscrito"}
                </button>
                {available && <button
                    onClick={() => history.push("/bootcamp/detail/" + _id)}
                    className="btn-pre">Prework ya Disponible</button>}
            </div>
        </div>
    )
}
export default withRouter(BootcampCard)