import React from 'react';
import "./Profile.css"
import img from "../../assets/secciones-02.png"
import ButtonUser from "../common/ButtonUser"
import { Link } from "react-router-dom"
import BootcampCard from '../bootcamp/BootcampCard'

export const UserBootcamp = ({ bootcamps = [] }) => {
    return (
        <section className="user-courses">
            {bootcamps.length < 1 ? <div className="box-c none-user">
                <p>El próximo Bootcamp Online inicia el 21 de Febrero. <br /> <strong>¡Incríbete ya! </strong>
                </p>
                <img style={{ opacity: ".7" }} src={img} alt="" />
                <br />
                <br />
                <Link to="/bootcamp">
                    <ButtonUser text="SABER MÁS" />
                </Link>
            </div> :

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {bootcamps.map((bootcamp, i) => (
                        <BootcampCard bootcamp={bootcamp} key={i} {...bootcamp} />
                    ))}
                </div>

            }


        </section>
    );
};