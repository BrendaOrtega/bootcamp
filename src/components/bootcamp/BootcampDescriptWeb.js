import React, { Component } from 'react';
import "./Bootcamp.css"


class BootcampDescriptWeb extends Component {
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
                <title>Bootcamp Web | FixterGeek</title>
                <section className="container-bootcamp">
                    <div className="container-summary">
                        <h2 className="name-descript">Fundamentos de Desarrollo Web con JavaScript</h2>
                        <hr className="line-red"/>
                        <p className="description"> Aprende las bases de la programación y preparate
                            para incursionar en el mundo del desarrollo Web utilizando uno de los lenguajes más utilizados: JavaScript</p>
                        <button className="btn-float">Inscribete</button>

                    </div>
                    <div className="container-content">
                        <div className="background">

                        </div>

                    </div>
                </section>
                <section style={{backgroundColor:"#f5f5f5"}} className="contenedor camp-programa">
                    <div className="box-programa">
                        <h2>
                            ¡Explora el poder del desarrollo web front-end con Python!</h2>
                        <br/>
                        <h3>Web experiences</h3>
                        <p>Add more depth to your websites with our JavaScript course. You'll start with the basics of functional programming, like objects, arrays, and jQuery. Then you’ll cover APIs and AJAX, and promises, among other topics. You will leave this course with the perfect addition to your front-end skillset.</p>
                        <br/>
                        <h3>Unmatched Experience</h3>
                        <p>This JavaScript course is a unique offering in Toronto. Nowhere else can you join a classroom of people focused specifically on learning JavaScript. Since HTML & CSS are a prerequisite, you’ll dive right into JavaScript and spend 48 in-class hours mastering curriculum that is regularly updated to ensure you’re learning the best, most relevant programming topics.</p>
                    </div>
                    <div className="box-data">
                        <p>Próxima edición</p>
                        <h3>25 de Noviembre</h3>

                        <hr/>
                        <p>Más de 24 hrs de ejercicios en</p>
                        <h3> 5 semanas</h3>

                        <hr/>
                        <p>Aprende con la práctica</p>
                        <h3>4 proyectos</h3>
                        <hr/>
                        <p>Precio especial Edición cero</p>
                        <h3>$ 1,000.00</h3>

                        <hr/>
                    </div>
                </section >
                <section className="contenedor download-t">
                    <div className="temario">
                        <h2>¿Qué vas a aprender?</h2>
                        <p>Algunas cosas que aprenderás ene ste curso son:</p>
                        <p><span>&bull;</span> Funcionaes, ciclos y condicionales</p>
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
                                Descarga el temario completo en PDF
                            </p>
                            <br/>
                            <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FTemario_Python3.pdf?alt=media&token=098d69d7-d41d-4292-ac4f-2818b4cc6463" target="blank" className="btn-down">
                                Descargar
                            </a>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default BootcampDescriptWeb;