import React from 'react';
import "./Bootcamp.css"



export const CardLessons = ({ onClick, week, date, name, descript }) => {
    return (
        <section onClick={onClick} className="card-l">
            <div>
                <h2>{week}</h2>
                <p>{date}</p>
            </div>
            <div className="nn">
                <h2>{name}</h2>
                <p>{descript}</p>
            </div>
            <div>
                <p className="btn-see">Ver</p>

            </div>
        </section>
    );
};