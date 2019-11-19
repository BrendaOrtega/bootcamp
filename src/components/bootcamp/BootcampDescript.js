import React, { Component } from 'react';
import "./Bootcamp.css"
import { Tabs } from 'antd';
import {Link} from "react-router-dom";
import download from "../../assets/iconos100x100DWN-05.png"
import pactive from "../../assets/barra-de-progreso 2.svg"
import pinactive from "../../assets/barra-de-progreso_inactive.svg"
import katia from "../../assets/Screen Shot 2019-11-18 at 9.03.37 PM.png";

class BootcampDescript extends Component {
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
                <title>Bootcamp Python | FixterGeek</title>
                <section className="container-bootcamp">
                    <div className="container-summary">
                        <h2 className="name-descript">Fundamentos de Programación con Python</h2>
                        <hr className="line-red"/>
                        <p className="description"> Aprende las bases de la programación, y preparate
                            para este programa creado especialmente para principiantes que quieren incursionar en el mundo de Python
                            tanto para análisis de datos como para desarrollo web. </p>
                        <Link to="/apply?b=5dc1db06cd0b842984edca7c">
                            <button className="btn-float">Inscribirme</button>
                        </Link>
                        <div className="nivel">
                            <p>Nivel <span style={{fontSize:"10px"}}>(básico)</span></p>
                            <img src={pactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                        </div>
                    </div>
                    <div className="container-content">
                        <div className="background">
                       {/* <div className="week">
                            <h3>5 semanas</h3>
                            <p>48 horas de actividades</p> </div>
                        <div className="week">
                            <h3></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ipsam nam natus optio
                                pariatur perferendis rerum suscipit, voluptates.
                                Beatae consectetur distinctio excepturi molestias
                                perferendis provident sapiente totam voluptates.
                                Cumque, quam quis.</p>
                        </div>
                        <div className="week">
                            <h3>Semana 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ipsam nam natus optio
                                pariatur perferendis rerum suscipit, voluptates.
                                Beatae consectetur distinctio excepturi molestias
                                perferendis provident sapiente totam voluptates.
                                Cumque, quam quis.</p>
                        </div>*/}
                    </div>

                    </div>
                </section>
                <section style={{backgroundColor:"#f5f5f5"}} className="contenedor camp-programa">
                    <div className="box-programa">
                        <h2>
                            ¡Explora el poder de la programación con Python!</h2>
                        <br/>
                        <h3>Por qué aprender Python...</h3>
                        <p>
                            Python es un lenguaje de programación versátil y popular, es uno de los lenguajes de programación más populares y de más rápido crecimiento del mundo, utilizado por ingenieros de software, analistas, científicos de datos e ingenieros de machine learning.
                        </p>
                        <br/>
                        <h3>Experiencia inigulable</h3>
                        <p>
                          Este curso es una gran introducción a los conceptos básicos de programación,
                          en donde al final, entenderás como utilizar este lenguaje y como aplicarlo tanto para el
                          análisis de datos, como para el desarrollo web.
                        </p>
                    </div>
                    <div className="box-data">
                        <p>Próxima edición</p>
                        <h3>25 de Noviembre 2018</h3>

                        <hr/>
                        <p>Más de 24 hrs de ejercicios en</p>
                        <h3> 5 semanas</h3>

                        <hr/>
                        <p>Aprende con la práctica</p>
                        <h3>1 examen final</h3>
                        <hr/>
                        <p>Precio especial edición cero</p>
                        <h3>$ 1,000.00</h3>

                        <hr/>
                    </div>
                </section >
                <section className="contenedor download-t">
                    <div className="temario">
                       <h2>¿Qué vas a aprender?</h2>
                        <p>Algunas cosas que aprenderás en este curso son:</p>
                        <p><span>&bull;</span> Funciones, ciclos y condicionales</p>
                        <p><span>&bull;</span> Debug, tracing y logging</p>
                        <p><span>&bull;</span> Expresiones regulares en Python</p>
                        <p><span>&bull;</span> Funciones lambda</p>
                        <p><span>&bull;</span> Async IO</p>
                        <p><span>&bull;</span> Ambientes virtuales</p>
                        <p><span>&bull;</span> Scrapping</p>
                        <p><span>&bull;</span> SQL</p>
                        <p><span>&bull;</span> Pandas y más</p>
                    </div>
                    <div className="downl">
                        <div>
                        <h3>TEMARIO</h3>
                        <p>¿Quieres saber más sobre lo que aprenderás en el bootcamp?
                        Descarga el temario completo en PDF.
                        </p>

                            <br/>
                        <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FTemario_Python3.pdf?alt=media&token=098d69d7-d41d-4292-ac4f-2818b4cc6463" target="blank" >
                            <img src={download} alt="descargar-temario"/>
                        </a>
                        </div>
                    </div>
                </section>
               {/* <section className="team-education">
                    <div>
                    <div className="circulo katia">

                    </div>
                        <br/>
                    <h2>Katia Lira</h2>
                        <p>Teacher</p>
                    </div>
                </section>*/}
               {/* <img src="https://images.pexels.com/photos/2625766/pexels-photo-2625766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                <section style={{MaxHeight:"200px", overflow:"hidden"}}>
                    <OwlCarousel ref="car" options={options}  >
                        <div className="item">hola<img src='https://images.pexels.com/photos/2625766/pexels-photo-2625766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/></div>
                        <div className="item">ji<img src='https://images.pexels.com/photos/2625766/pexels-photo-2625766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/></div>
                        <div className="item">osiii<img src='https://images.pexels.com/photos/2625766/pexels-photo-2625766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/></div>
                  </OwlCarousel>
                    <button className='btn_slide' onClick={() => this.refs.car.prev()}>
                        <FontAwesome name='angle-left' className='icon_about' size='2x'/>
                    </button>
                    <button className='btn_slide' onClick={() => this.refs.car.next()}>
                        <FontAwesome name='angle-right' className='icon_about' size='2x'/>
                    </button>
                </section>*/}

            </section>
        )
    }
}

export default BootcampDescript;