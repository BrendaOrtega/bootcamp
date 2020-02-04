import React, { Component } from 'react';
import "./Bootcamp.css"
import pactive from "../../assets/barra-de-progreso 2.svg";
import pinactive from "../../assets/barra-de-progreso_inactive.svg";
import download from "../../assets/iconos100x100DWN-05.png";
import {Link} from "react-router-dom";

class Backend extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {

        return (
            <section className="bootcamp">
                <meta
                    name="description"
                    content="Establece las bases de programación y preparate para una este programa creado especialmente para
                        principiantes que quieren incursionar en el mundo del desarrollo web."
                />
                <meta
                    name="keywords"
                    content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
                />
                <title>Bootcamp Backend | FixterGeek</title>
                <section  className="container-bootcamp">
                    <div className="container-summary">
                        <h2 className="name-descript">Backend API con NodeJs y ExpressJs</h2>
                        <hr className="line-red"/>
                        <p className="description"> Aprende a construir un backend y tus propias API con NodeJs y ExpressJs</p>
                        <Link to="/apply/?b=5de52ae9734c4163308b63fd">
                            <button className="btn-float">Inscribirme</button>
                        </Link>

                        <div className="nivel">
                            <p>Nivel <span style={{fontSize:"10px"}}>(intermedio)</span></p>
                            <img src={pactive} alt="nivel"/>
                            <img  src={pactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                        </div>
                    </div>
                    <div id="back-background" className="container-content">
                        <div className="background">

                        </div>

                    </div>
                </section>
                <section style={{backgroundColor:"#f5f5f5"}} className="contenedor camp-programa">
                    <div className="box-programa">
                        <h2>
                            ¡Explora el poder del desarrollo Backend con JavaScript!</h2>
                        <br/>
                        <h3>Por qué Backend...</h3>
                        <p>
                            Todas las aplicaciones web o móviles necesitan un backend de donde consumir datos de forma estructurada y segura,
                            así que en este curso aprenderás a utilizar distintas bases de datos, a escribir rutas, controladores, middlewares, y más
                            para crear tu propia API.


                        </p>
                        <br/>
                        <h3>Experiencia inigualable</h3>
                        <p>
                            En esta nueva modalidad de bootcamp online, te sumergirás en una experiencia única de aprendizaje,
                            en donde conocerás las mejores prácticas del desarrollo para construir tu propio sitio web.
                        </p>
                    </div>
                    <div className="box-data">
                        <p>Próxima edición</p>
                        <h3>3 de Febrero 2020</h3>

                        <hr/>
                        <p>Más de 24 hrs de ejercicios en</p>
                        <h3> 5 semanas</h3>

                        <hr/>
                        <p>Aprende con la práctica</p>
                        <h3>1 exámen final</h3>
                        <hr/>
                        <p>Precio especial diciembre <span style={{fontSize:"10px"}}>(hasta 6 MSI)</span></p>
                        <h3>$ 1,999.00</h3>

                        <hr/>
                    </div>
                </section >
                <section className="contenedor download-t">
                    <div className="temario">
                        <h2>¿Qué vas a aprender?</h2>
                        <p>Algunas cosas que aprenderás ene ste curso son:</p>
                        <p><span>&bull;</span> Qué es un backend</p>
                        <p><span>&bull;</span> NodeJs</p>
                        <p><span>&bull;</span> Bases de datos SQL y NoSQL</p>
                        <p><span>&bull;</span> Diferencias entre un ODM y un ORM</p>
                        <p><span>&bull;</span> ExpressJs</p>
                        <p><span>&bull;</span> Autenticación de usuarios</p>
                        <p><span>&bull;</span> Mailing</p>
                        <p><span>&bull;</span> Deploy de API</p>
                    </div>
                    <div className="downl">
                        <div>
                            <h3>TEMARIO</h3>
                            <p>¿Quieres saber más sobre lo que aprenderás en el bootcamp?
                                Descarga el temario completo en PDF
                            </p>
                            <br/>
                            <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FBackend.pdf?alt=media&token=c6a10d3a-eb01-4938-adbe-28d8ce47b7b7" target="blank" >
                                <img src={download} alt=""/>
                            </a>
                        </div>
                    </div>
                </section>
                {/*   <section className="team-education">
                    <div className="circulo katia">
                        <img src={katia} alt="katia"/>
                    </div>
                </section>*/}
            </section>
        )
    }
}

export default Backend;