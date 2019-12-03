import React from 'react';
import "./Profile.css"
import img from "../../assets/secciones-03.png"

export const UserBooks = () => {
    return (
        <section className="user-courses">
            <div className="box-c none-user">
                <h2> <strong>¡Próximamente! </strong>
                </h2>
                <p>Serás el primero en conocer nuestro material literario en cuanto este disponible.</p>
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