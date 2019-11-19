import React, { Component } from 'react';
import Button from "../common/Button"
import "./Bootcamp.css"
import { Tabs } from 'antd';
import ButtonWhite from "../common/ButtonWhite"
import {Link} from "react-router-dom";
import step1 from "../../assets/iconos_100x100_Mesa de trabajo 1.png"
import step2 from "../../assets/iconos_100x100-02.png"
import step3 from "../../assets/iconos_100x100-03.png"
import step4 from "../../assets/iconos_100x100-04.png"

const { TabPane } = Tabs;

class Python extends Component {
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
                <title>Bootcamp | FixterGeek</title>
                <div className="intro-bootcamp">
                    <div className="bootcamp-descript">
                        <div>
                            <h2 style={{textAlign:"left"}} className="subtitulos">Online Bootcamp | Fundamentos de programación con Python 3</h2>
                            <br/>
                            <p>
                                Si eres nuevo en programación, agrega este skill y preparate para impulsar tu carrera. <br/>
                                Aprende los
                                fundamentos necesarios para abordar el desarrollo de software a nivel profesional.
                            </p>
                            <br/>
                            <p>25 de Noviembre 2019 | 09:00 am </p>
                            <br/>
                            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap:10}}>
                            <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FTemario_Python3.pdf?alt=media&token=098d69d7-d41d-4292-ac4f-2818b4cc6463">
                             <Button ico="🎓" text="Descarga el temario"/>
                             </a>
                             <Link to={"/apply?b=5dc1db06cd0b842984edca7c"}>
                                <Button ico="{ }" text="Inscribirme"/>
                            </Link>
                            </div>
                           
                        </div>
                    </div>
                    <div className="bootcamp-img2">

                    </div>
                </div>
                <div className="summary">
                    <h2 style={{textAlign:"left"}} className="subtitulos">Programa</h2>
                    <p className="textos">Establece las bases de programación y preparate para una este programa creado especialmente para
                        principiantes que quieren incursionar en el mundo de Python tanto para analisis de datos como desarrollo web.
                      </p>
                    <br/>
                    <div>
                        <Tabs tabPosition="left">
                            <TabPane tab="Semana 0" key="1">
                                <p>
                                    Con este <strong>Bootcamp Online</strong>, conocerás los fundamentos necesarios para abordar el
                                     <strong> desarrollo de software con Python </strong>
                                   cómo un profesional, entenderás cuales son las <strong>herramientas </strong>
                                    que se usan con este lenguaje y experimentarás también con las tecnologías y aplicaciones que nos
                                    permiten usar esta herramienta <strong>para visualizar datos y crear algoritmos de Machine Learning </strong> además de explorar cómo se crean <strong>aplicaciones web.</strong>   </p>
                                    <br/>
                                    <p>
                                    Al finalizar este Bootcamp Online, serás capaz de crear aplicaciones con Python por tu cuenta pues también aprenderás a programar
                                    y estarás listo para dar el siguiente paso hacia una herramienta más avanzada.
                                    </p>
                                    <br/>
                                    <p>
                                    En la Semana 0 aprenderás como funciona un bootcamp online, instalaremos todas las herramientas que utilizaremos
                                    durante el curso.
                            </p>


                            </TabPane>
                            <TabPane tab="Semana 1" key="2">
                                <h4>  En la Semana 1 | Introducción a Python:</h4>
                                <br/>
                                <p><span>&bull;</span> Instalar las versiones de Python</p>
                                <p><span>&bull;</span> Crea Tu primer script</p>
                                <p><span>&bull;</span> Tipo de dato Cadena</p>
                                <p><span>&bull;</span> Métodos de cadenas</p>
                                <p><span>&bull;</span> Funciones</p>
                                <p><span>&bull;</span> Ciclos</p>
                                <p><span>&bull;</span> Condicionales</p>
                            </TabPane>
                            <TabPane tab="Semana 2" key="3">
                                <h4>  En la Semana 2 | Tipos de datos y archivos:</h4>
                                <br/>
                                <p><span>&bull;</span> Listas</p>
                                <p><span>&bull;</span> Tuplas</p>
                                <p><span>&bull;</span> Diccionarios</p>
                                <p><span>&bull;</span> Leer e imprimir archivos</p>
                                <p><span>&bull;</span> CSV y PDF</p>
                                <p><span>&bull;</span> Función Print</p>
                                <p><span>&bull;</span> Debug, tracing y logging</p>

                            </TabPane>
                            <TabPane tab="Semana 3" key="4">
                                <h4> En la Semana 3 | Python Intermedio:</h4>
                                <br/>
                                <p><span>&bull;</span> Fechas y tiempos en Python</p>
                                <p><span>&bull;</span> Expresiones regulares en Python</p>
                                <p><span>&bull;</span> Funciones lambda</p>
                                <p><span>&bull;</span> Excepciones en Python</p>

                            </TabPane>
                            <TabPane tab="Semana 4" key="5">
                                <h4> En la Semana 4 | Python Avanzado :</h4>
                                <br/>
                                <p><span>&bull;</span> Async IO</p>
                                <p><span>&bull;</span> Paquetes Populares </p>
                                <p><span>&bull;</span> Ambientes virtuales</p>
                                <p><span>&bull;</span> Scrapping</p>
                                <p><span>&bull;</span> Trabajar con bases de datos SQL</p>
                                <p><span>&bull;</span> Pandas</p>
                                <p><span>&bull;</span> NumPy</p>
                                <p><span>&bull;</span> Exmen Final</p>

                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="how">
                    <h2 className="subtitulos">¿Cómo funciona un Bootcamp Online?</h2>
                    <div className="box-steps">
                        <div className="steps">
                            <div className="step-img photo1">
                                <div className="circle-white">
                                    <img src={step1} alt=""/>
                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>Inscríbete</h3>
                                <p>Inscríbete al bootcamp antes del día 25 de Noviembre.

                                    Y completa el Prework que aparecerá
                                    en tu perfil.
                                </p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="step-img photo2">
                                <div className="circle-white">
                                    <img src={step2} alt=""/>
                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>Aprende</h3>
                                <p>Termina cada lección en video y sube tus tareas. Debes completar cada módulo dentro de la semana correspondiente.</p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="step-img photo3">
                                <div className="circle-white">
                                    <img src={step4} alt=""/>
                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>Asesoría</h3>
                                <p>¿Tienes dudas sobre alguna lección? Podrás recibir asesoría de nuestros mentores.</p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="step-img photo4">
                                <div className="circle-white">
                                    <img src={step3} alt=""/>
                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>Examen final</h3>
                                <p>Para probar que has puesto atención  en cada lección, te haremos un breve exámen para obtener tu diploma y un
                                suculento pack de stickers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invite">
                    <h2 className="subtitulos" style={{marginBottom:"20px"}}>¿Quieres completar tu aprendizaje?</h2>

                    <p>Explora nuestro catálogo de cursos en línea, y aprende a usar las herramientas más utilziadas del
                        desarrollo.</p>
                    <p>
                        Encuentra cursos actualizados y concretos de las tecnologías más populares para el desarrollo de aplicaciones
                        web y móviles. Aprende con los profesionales y forma parte
                        de nuestra comunidad.

                    </p>
                    <br/>
                    <Link to="/courses">
                    <ButtonWhite ico="#" text="EXPLORAR"/>
                    </Link>
                </div>
            </section>
        )
    }
}

export default Python;