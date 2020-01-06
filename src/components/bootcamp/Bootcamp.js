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
import {CardBootcamp} from "../card/CardBootcamp";
import pyth from "../../assets/badgePYTHON_TTLBLCK_Mesa_de_trabajo_1.png";
import web from "../../assets/badge3D_Mesa_de_trabajo_1.png";


class Bootcamp extends Component {
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
                            <h2 style={{textAlign:"left"}} className="subtitulos">Bootcamp Online</h2>
                            <br/>
                            <p>
                                Aprende a programar y preparate para impulsar tu carrera profesional. <br/>
                                Sumerguete en el mundo de la programación y aborda el desarrollo de software a nivel profesional.
                            </p>
                            <br/>
                            <p>100% online | 5 y 8 semanas </p>
                            <br/>
                            <Link to="/preorder">
                                <Button ico="{ }" text="Inscribirme"/>
                            </Link>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="bootcamp-img">

                    </div>
                </div>
                <section className="destacados">
                    <h2 className="subtitulos">¿Qué quieres aprender?</h2>
                    <div className="flexin">

                            <CardBootcamp
                                image={pyth}
                                name="Fundamentos de Desarrollo con Python"
                                descript="Aprende a programar con Python, aprende lo necesario sobre el modelo vista controlador"
                                lecciones="45 lecciones"
                                tiempo="6hrs"
                                link="/bootcamp-descript"
                                link2="/preorder"
                                action="Pre-inscripción"
                            />
                            <CardBootcamp
                                image={web}
                                name="Fundamentos de Desarrollo Web con JavaScript"
                                descript="Aprende a crear y hostear tu propio sitio web con JavaScript"
                                lecciones="74 lecciones"
                                tiempo="7hrs"
                                link="/bootcamp-descript-web"
                                link2="/preorder"
                                action="Pre-inscripción"
                            />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fnode_BADGE_Mesa_de_trabajo_1.png?alt=media&token=4e3f49d4-f4a2-4572-9e7a-b92d66d2a45a"
                            name="Backend API con NodeJs y ExpressJs"
                            descript="Construye un backend API con NodeJs y ExpressJs "
                            lecciones=" 70 lecciones"
                            tiempo="6hrs"
                            link="/bootcamp-backend-nodejs"
                            link2="/preorder"
                            action="Pre-inscripción"
                        />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fbadges_Mesa_de_trabajo_1_copia_2%20(1).png?alt=media&token=b104bae1-992f-4924-85aa-55aaa98a08ba"
                            name="Aprende a usar PHP correctamente"
                            descript="Aprende PHP de forma fácil y eficiente, pero sobre todo con buenas prácticas"
                            lecciones="53 lecciones"
                            tiempo="6hrs"
                            link="/bootcamp-php"
                            link2="/preorder"
                            action="Pre-inscripción"
                        />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FbadgePHP_Prueba_Mesa_de_trabajo_1.png?alt=media&token=15556e2b-3ba4-4c1d-b675-ab681d9c4775"
                            name="Aplicaciones web fullstack con Laravel"
                            descript="Crea una aplicación web de 0 a 100 con PHP y Laravel "
                            lecciones="83 lecciones"
                            tiempo="6hrs"
                            link="/bootcamp-descript-laravel"
                            link2="/preorder"
                            action="Pre-inscripción"
                        />
                     {/*   <CardBootcamp
                            image={rea}
                            name="Desarrollo Frontend con ReactJs + Redux"
                            descript="Crea una aplicación web "
                            lecciones="72 lecciones"
                            tiempo="8hrs"
                            link="/bootcamp-descript-react"
                            link2="/preorder"
                            action="Pre-inscripción"
                        />*/}

                      {/*  <CardBootcamp image={image} name="Backend con Python" lecciones="5 semanas" tiempo="1 proyecto"/>
                        <CardBootcamp image={image} name="Backend con Python" lecciones="5 semanas" tiempo="1 proyecto"/>
                        <CardBootcamp image={image} name="Backend con Python" lecciones="5 semanas" tiempo="1 proyecto"/>
                        <CardBootcamp image={image} name="Backend con Python" lecciones="5 semanas" tiempo="1 proyecto"/>
                        <CardBootcamp image={image} name="Backend con Python" lecciones="5 semanas" tiempo="1 proyecto"/>
                        <CardBootcamp image={image} name="Backend con Python" lecciones="5 semanas" tiempo="1 proyecto"/>*/}


                    </div>
                </section>
              {/*  <div className="summary">
                    <h2 style={{textAlign:"left"}} className="subtitulos">Programa</h2>
                    <p className="textos">Establece las bases de programación y preparate para una este programa creado especialmente para
                        principiantes que quieren incursionar en el mundo del desarrollo web.
                      </p>
                    <br/>
                    <div>
                        <Tabs tabPosition="left">
                            <TabPane tab="Semana 0" key="1">
                                <p>
                                    Con este <strong>Bootcamp Online</strong>, conocerás los fundamentos necesarios para abordar el
                                     <strong> desarrollo de software </strong>
                                   cómo un profesional, entenderás cuales son las <strong>herramientas </strong>
                                    que se usan para crear páginas web, experimentarás también con las tecnologías que nos
                                    permiten tener una <strong>estructura cliente - servidor </strong> que nos permitirán crear <strong>aplicaciones web.</strong>   </p>
                                    <br/>
                                    <p>
                                    Al finalizar este Bootcamp Online, serás capaz de crear aplicaciones web por tu cuenta
                                    y estarás listo para dar el siguiente paso hacia un fraework frontend.
                                    </p>
                                    <br/>
                                    <p>
                                    En la Semana 0 aprenderás como funciona un bootcamp online, instalaremos todas las herramientas que utilizaremos
                                    durante el curso.
                            </p>


                            </TabPane>
                            <TabPane tab="Semana 1" key="2">
                                <h4>  En la Semana 1 | Introducción al Desarrollo Web :</h4>
                                <br/>
                                <p><span>&bull;</span> Aprende las bases del desarrollo web</p>
                                <p><span>&bull;</span> Aprende a utilizar y customizar nuestro editor de código</p>
                                <p><span>&bull;</span> Maqueta tu primer sitio web on HTML</p>
                                <p><span>&bull;</span> Estiliza tu sitio web con CSS</p>
                                <p><span>&bull;</span> Aprende las bases de JavaScript</p>
                                <p><span>&bull;</span> Crea tu mini-bio con HTML5</p>
                            </TabPane>
                            <TabPane tab="Semana 2" key="3">
                                <h4>  En la Semana 2 | HTML y CSS :</h4>
                                <br/>
                                <p><span>&bull;</span> Aprende como aplicar las propiedades de CSS</p>
                                <p><span>&bull;</span> Aprende los tipos de Selectores</p>
                                <p><span>&bull;</span> Aprende a utilizar electores avanzados</p>
                                <p><span>&bull;</span> FlexBox</p>
                                <p><span>&bull;</span> Practicando CSS</p>

                            </TabPane>
                            <TabPane tab="Semana 3" key="4">
                                <h4> En la Semana 3 | JavaScript :</h4>
                                <br/>
                                <p><span>&bull;</span> Aprende cómo manipular el DOM</p>
                                <p><span>&bull;</span> Aprende qué son los nodos</p>
                                <p><span>&bull;</span> Aprende a modificar los nodos</p>
                                <p><span>&bull;</span> Vanilla Js</p>
                                <p><span>&bull;</span> Crea un videojuego con JavaScript</p>

                            </TabPane>
                            <TabPane tab="Semana 4" key="5">
                                <h4> En la Semana 4 | Deployment :</h4>
                                <br/>
                                <p><span>&bull;</span> ¿Cómo servir una página web?</p>
                                <p><span>&bull;</span> Servidor Local</p>
                                <p><span>&bull;</span> Aprende a comprimir archivos con WebPack</p>
                                <p><span>&bull;</span> Publica tu videojuego</p>
                                <p><span>&bull;</span> ¿Qué sigue?</p>
                                <p><span>&bull;</span> Examen final</p>

                            </TabPane>
                        </Tabs>
                    </div>
                </div>*/}
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
                                <p>Inscríbete a cualquier bootcamp y completa el Prework que aparecerá disponible
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
                                <p>¿Tienes dudas sobre alguna lección? Podrás recibir asesoría de nuestros instructores.</p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="step-img photo4">
                                <div className="circle-white">
                                    <img src={step3} alt=""/>
                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>Exámen final</h3>
                                <p>Para probar lo que has aprendido en cada lección, realizarás un exámen para obtener tu diploma y un
                                suculento pack de stickers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invite">
                    <h2 className="subtitulos" style={{marginBottom:"20px"}}>¿Quieres completar tu aprendizaje?</h2>

                    <p>Explora nuestro catálogo de cursos en línea, y aprende a usar las herramientas más utilzadas en el desarrollo de software.</p>
                    <p>
                        Encuentra cursos actualizados y concretos sobre las tecnologías más populares para el desarrollo de aplicaciones
                        web y móviles. Aprende con los profesionales y forma parte
                        de nuestra gran comunidad.

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

export default Bootcamp;