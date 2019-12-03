import React, { Component } from 'react';
import "./Bootcamp.css"
import pactive from "../../assets/barra-de-progreso 2.svg";
import pinactive from "../../assets/barra-de-progreso_inactive.svg";
import download from "../../assets/iconos100x100DWN-05.png";
import {Link} from "react-router-dom";

class BootcampDescriptLaravel extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        const options = {
            autoplay: true,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        };
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
                <title>Bootcamp Laravel | FixterGeek</title>
                <section  className="container-bootcamp">
                    <div className="container-summary">
                        <h2 className="name-descript">Aplicaciones web fullstack con Laravel</h2>
                        <hr className="line-red"/>
                        <p className="description"> Aprende a crear una app web con uno de los lenguajes más utilziados pero con las mejores prácticas y su framework más popular: Laravel. </p>
                        <Link to="/preorder">
                            <button className="btn-float">Pre-inscripción</button>
                        </Link>
                        <div className="nivel">
                            <p>Nivel <span style={{fontSize:"10px"}}>(medio-avanzado)</span></p>
                            <img src={pactive} alt="nivel"/>
                            <img src={pactive} alt="nivel"/>
                            <img  src={pactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                        </div>
                    </div>
                    <div id="contain" className="container-content">
                        <div className="background">

                        </div>

                    </div>
                </section>
                <section style={{backgroundColor:"#f5f5f5"}} className="contenedor camp-programa">
                    <div className="box-programa">
                        <h2>
                            ¡Vuélvete un profesional del desarrollo web con Laravel!</h2>
                        <br/>
                        <h3>Por qué PHP y Laravel...</h3>
                        <p>
                            PHP es uno de los  5 lenguajes más utilizados para el desarrollo de software, pero por algún tiempo fue el más
                            utilizado, y actualmente sigue siendo demandando en vacantes de alto nivel. Y es por esto, que
                            en este curso aprenderás a programar PHP y crearás una aplicación de 0 a 100 con las mejores practicas.
                        </p>
                        <br/>
                        <h3>Experiencia inigualable</h3>
                        <p>
                            En esta nueva modalidad de bootcamp online, te sumergirás en una experiencia única de aprendizaje,
                            en donde concoerás las mejores prácticas del desarrollo para construir tu propio sitio web.
                        </p>
                    </div>
                    <div className="box-data">
                        <p>Próxima edición</p>
                        <h3>3 de Febrero 2020</h3>

                        <hr/>
                        <p>Más de 24 hrs de ejercicios en</p>
                        <h3> 8 semanas</h3>

                        <hr/>
                        <p>Aprende con la práctica</p>
                        <h3>1 exámen final</h3>
                        <hr/>
                        <p>Precio especial diciembre</p>
                        <h3>$ 1,500.00</h3>

                        <hr/>
                    </div>
                </section >
                <section className="contenedor download-t">
                    <div className="temario">
                        <h2>¿Qué vas a aprender?</h2>
                        <p>Algunas cosas que aprenderás ene ste curso son:</p>
                        <p><span>&bull;</span> Introducción a la OOP</p>
                        <p><span>&bull;</span> MVC</p>
                        <p><span>&bull;</span> Laravel</p>
                        <p><span>&bull;</span> Service Provider</p>
                        <p><span>&bull;</span> Ambientes (Producción, Testing, Local, QA)</p>
                        <p><span>&bull;</span> Bases de datos: mySQL, Postgres, SQL Server, Oracle, MongoDB, Redis</p>
                        <p><span>&bull;</span> Eloquent ORM</p>
                        <p><span>&bull;</span> Seguridad</p>
                        <p><span>&bull;</span> Autenticación, contraseñas y encriptación</p>
                        <p><span>&bull;</span> Test Driven Development</p>
                        <p><span>&bull;</span> Frontend: Laravel mix y Vue.Js</p>
                        <p><span>&bull;</span> API Rest</p>
                        <p><span>&bull;</span> Redis</p>
                    </div>
                    <div className="downl">
                        <div>
                            <h3>TEMARIO</h3>
                            <p>¿Quieres saber más sobre lo que aprenderás en el bootcamp?
                                Descarga el temario completo en PDF
                            </p>
                            <br/>
                            <a href="" target="blank" >
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

export default BootcampDescriptLaravel;