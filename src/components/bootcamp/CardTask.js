import React from 'react';
import "./Bootcamp.css"



export const CardTask = ({ uHomework = {}, week, date, name, descript, onClick }) => {
    return (
        <section style={{ marginRight: 20 }} className="card-task">
            <div style={{ padding: "4%", minHeight: 127 }}>
                <h2>{name}</h2>
                <p>{week}</p>
            </div>
            <button
                onClick={onClick}
                className="complete">
                {uHomework && uHomework.response ? <p style={{ color: uHomework.correct ? "green" : "red" }} >COMPLETADA</p> : <p >COMPLETAR</p>}
            </button>


        </section>
    );
};