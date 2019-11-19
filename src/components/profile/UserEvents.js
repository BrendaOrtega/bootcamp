import React from 'react';
import "./Profile.css"
import img from "../../assets/secciones-04.png"

export const UserEvents = () => {
    return (
        <section className="user-courses">
            <div className="box-c none-user">
                <h2> <strong>¡Ups! </strong></h2>
                <p> No tenemos eventos programados por el momento.
                </p>
                <img style={{opacity:".7"}} src={img} alt=""/>
                {/*         <br/>
                <br/>
                <ButtonUser ico="#" text="EXPLORAR"/>*/}
            </div>
            <div>

            </div>

        </section>
    );
};