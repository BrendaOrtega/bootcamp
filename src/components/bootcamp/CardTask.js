import React from 'react';
import "./Bootcamp.css"



export const CardTask = ({ week, date, name, descript, onClick }) => {
    return (
        <section className="card-task">
            <div style={{ padding: "4%" }}>
                <h2>{week}</h2>
                <p>{name}</p>
            </div>
            <button
                onClick={onClick}
                className="complete">
                COMPLETAR
            </button>


        </section>
    );
};