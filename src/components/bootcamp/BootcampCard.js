import React, { useEffect, useState } from 'react'
import FontAwesome from "react-fontawesome"
import js from "../../assets/JavaScript-logo.png"
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import img from "../../assets/28698604_1973144766082686_589124668727305128_o.jpg"



function BootcampCard({ startDate, endDate, history, weeks, exam, bootcamp, title, students = 100, _id, thumbnail }) {
    let [examAvailable, setExamAvailable] = useState(false)
    let available = false
    let week1 = false


    useEffect(() => {
        console.log(exam)
        if (exam && (moment(exam[0].startDate) < moment(Date.now()))) {
            setExamAvailable(true)
        }
    }, [exam])

    if (weeks && weeks[0] && (moment(weeks[0].startDate) < moment(Date.now()))) {
        available = true
    }
    if (weeks && weeks[1] && (moment(weeks[1].startDate) < moment(Date.now()))) {
        week1 = true
    }

    let link = "https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fphoto.jpg?alt=media&token=cbbffbc4-d321-4e8c-bc20-abcc83bc8710"
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
                <p> <FontAwesome name="user" /> {students.length + 195} Estudiantes</p>
                <p> <FontAwesome name="calendar" /> Inicia: <strong> 21 Febrero 2020</strong></p>
                <p> <FontAwesome name="calendar" /> Prework Disponible:  {available && <strong style={{ color: "#689f63" }}>{moment(weeks[0].startDate).format('ll')}</strong> || <strong> 10 Febrero 2020</strong>}</p>
                <p> <FontAwesome name="file" /> Exámen final: <b>11 Marzo 2020 </b> </p>
                <button className="btn-in">
                    {week1 ? <span
                        onClick={() => history.push("/bootcamp/detail/" + _id)}
                    >¡Bootcamp Ya disponible!</span> : "Inscrito"}
                </button>
                {available && <button
                    onClick={() => history.push("/bootcamp/detail/" + _id)}
                    className="btn-pre">Prework ya Disponible</button>}
                {examAvailable && <button
                    onClick={() => history.push("/exam/" + _id)}
                    className="btn-pre-exam">Examen ya Disponible</button>}
            </div>
        </div>
    )
}
export default withRouter(BootcampCard)