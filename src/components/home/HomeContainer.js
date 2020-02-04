import React, { Component } from 'react';
import "./Home.css"
import Button from "../common/Button";
import { CourseCard } from "../card/CourseCard";
import { Carousel } from 'antd';
import uno from "../../assets/icono3_version2.png"
import dos from "../../assets/icono4_version2.png"
import tres from "../../assets/icono2_version2.png"
import cuatro from "../../assets/icono1_version2.png"
import { Link } from "react-router-dom";
import oscar from "../../assets/ossscar.jpg"
import carlitos from "../../assets/carlitos.jpg"
import jorge from "../../assets/jorge.jpg"
import siete from "../../assets/badget1.png"
import cinco from "../../assets/badget2.png"
import seis from "../../assets/badget-3.png"
import pyth from "../../assets/badgePYTHON_TTLBLCK_Mesa_de_trabajo_1.png"
import web from "../../assets/badge3D_Mesa_de_trabajo_1.png"
import rea from "../../assets/badget-3.png"

// redux
import { connect } from 'react-redux'
import { getBootcampsAction } from '../../redux/bootcampDuck'
import {CardBootcamp} from "../card/CardBootcamp";


let react = require("../../assets/react.png")
let vue = require("../../assets/vue.png")
let angular = require("../../assets/angular.png")
let ember = require("../../assets/ember.png")
let docker = require("../../assets/dock.png")
let node = require("../../assets/node.png")
let python = require("../../assets/python.png")
let dj = require("../../assets/dj.png")
let fire = require("../../assets/fire.png")
let go = require("../../assets/go.png")
let kuber = require("../../assets/Kubernetes_(container_engine).png")
let rails = require("../../assets/ruby.png")
let webpack = require("../../assets/icon-square-big.png")
let redux = require("../../assets/logo.png")
let android = require("../../assets/android.png")
let gatsby = require("../../assets/gatsby.jpeg")

let imagenes = [
    react,
    vue,
    angular,
    ember,
    gatsby,
    node,
    python,
    dj,
    rails,
    fire,
    docker,
    webpack,
    go,
    kuber,
    redux,
    android

]

class HomeContainer extends Component {


    componentDidMount() {
        window.scroll(0, 0)
        let script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/gh/cmiscm/stickerjs/sticker.min.js'
        script.async = true
        script.onload = () => {
            window.Sticker.init('.sticker');
            // change bg

            let imgs = document.querySelectorAll('.sticker-img.sticker-front')
            let back = document.querySelectorAll('.sticker-img.sticker-back')
            console.log(imgs)
            imgs.forEach((div, i) => {
                div.style = `background-image:url('${imagenes[i]}')`
                back[i].style = `background-image:url('${imagenes[i]}')`
            })
            //img.style = `background-image:url('${fire}')`
            //img.style = 'background-color:red'
        }
        document.body.appendChild(script)
        // redux
        //this.props.getBootcampsAction()
    }

    onChange = (a, b, c) => {
        //console.log(a, b, c);
    };

    render() {
        return (
            <section>
                <meta
                    name="description"
                    content="FixterGeek, es una plataforma única en donde encontraras cursos, ejercicios, artículos, libros y eventos sobre tecnología."
                />
                <meta
                    name="keywords"
                    content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
                />
                <title>FixterGeek</title>
                <section className="slide">
                    <div className="cover">
                        <div className="slogan">
                            <h2>Aprende las <strong>herramientas</strong> y <strong>frameworks</strong> que usan los profesionales de la industria</h2>
                            <p>Cursos, botocamps, eventos y más.
                            </p>
                            <br />
                            <Link to="/bootcamp">
                                <Button ico=">_" text=" Explorar" />
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="box-framework">
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                    </div>
                    <div className="descript">
                        <h2>¿Qué es FixterGeek? </h2>
                        <p>
                            Es una plataforma única en donde profesionales del desarrollo de software
                            que ofrecen cursos en video sobre herramientas especificas utilizadas en la industria
                            de forma concisa y clara.
                        </p>
                        <p>
                            Tenemos más de 4 años de experiencia impartiendo cursos presenciales, así que buscamos
                            ofrecerte una experiencia única; no encontrarás 10 videos de 1hr cada uno, encontrarás cursos pequeños y concretos.
                        </p>
                        <p>
                            Además, encontrarás bootcamps online,
                            eventos, artículos y libros sobre tecnología.
                        </p>
                        <p>
                            Si eres un <strong>apasionado del código, los bugs y el localhost,</strong>  estas en el lugar correcto.</p>
                        <br />
                        <Link to="/courses">
                            <Button ico="</>" text=" Iniciar" />
                        </Link>
                    </div>
                </section>
                <section className="why">
                    <h2>¿Por qué aprender en Fixter? </h2>
                    <div className="box-why">
                        <div className="card-beneficios">
                            <img src={cuatro} alt="" />
                            <div className="beneficios">
                                <h3>Diversidad</h3>
                                <p>Explora nuestros cursos y bootcamps, y elige el que más te interese.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={tres} alt="" />
                            <div className="beneficios">
                                <h3>Práctica</h3>
                                <p>Toma cada curso a tu ritmo y a tu tiempo. Están siempre disponibles.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={uno} alt="" />
                            <div className="beneficios">
                                <h3>Asesoría</h3>
                                <p>Ten asesorías sobre el curso directamente de nuestros instructores.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={dos} alt="" />
                            <div className="beneficios">
                                <h3>Certificado</h3>
                                <p>Recibirás un diploma y un pack de stickers como recompensa al terminar.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="destacados">
                    <h2 className="subtitulos">Nuevos Bootcamps</h2>
                    <div className="box-destacados">
                        <CardBootcamp
                            image={pyth}
                            name="Fundamentos de Desarrollo con Python"
                            descript="Aprende a programar con Python, aprende lo necesario sobre el modelo vista controlador"
                            lecciones="45 lecciones"
                            tiempo="6hrs"
                            link="/bootcamp-descript"
                            link2="/apply/?b=5dc1db06cd0b842984edca7c"
                            action="Inscribirme"
                        />
                        <CardBootcamp
                            image={web}
                            name="Fundamentos de Desarrollo Web con JavaScript"
                            descript="Aprende a crear y hostear tu propio sitio web con JavaScript"
                            lecciones="74 lecciones"
                            tiempo="7hrs"
                            link="/bootcamp-descript-web"
                            link2="/apply/?b=5d632e4c339a1b379df68a74"
                            action="Inscribirme"
                        />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fnode_BADGE_Mesa_de_trabajo_1.png?alt=media&token=4e3f49d4-f4a2-4572-9e7a-b92d66d2a45a"
                            name="Backend API con NodeJs y ExpressJs"
                            descript="Construye un backend API con NodeJs y ExpressJs "
                            lecciones=" 70 lecciones"
                            tiempo="6hrs"
                            link="/bootcamp-backend-nodejs"
                            link2="/apply/?b=5de52ae9734c4163308b63fd"
                            action="Inscribirme"
                        />


                      {/*  <CourseCard image={siete} name="Empezando con Firebase Realtime Database"
                        lecciones="12 lecciones" tiempo="35 minutos"
                        />
                        <CourseCard image={cinco} name="Tu primer aplicación con Firebase"
                                    lecciones="14 lecciones" tiempo="30 minutos"
                        />
                        <CourseCard image={seis} name="Estructura de Datos Complejos con Realtime DB"
                                    lecciones="10 lecciones" tiempo="40 minutos"
                        />*/}
                    </div>
                </section>
                <section className="testimonios">
                    <h2 className="subtitulos">Conoce a nuestros ex-alumnos</h2>
                    <div>
                        <Carousel afterChange={this.onChange} autoplay>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{ backgroundImage: `url('${oscar}')` }}></div>
                                <div className="testimonio ">
                                    <span className="signo">“</span>  <p> "En Fixter aprendí a programar viniendo de un pasado totalmente distinto al desarrollo de tecnología. Desmenuzan los temas de la forma más simple para que sin importar si sabes mucho o poco, comprendas a la perfección cada uno de ellos o simplemente te actualices. Al día de hoy trabajo en esta industria que además de ser divertida, también es bien remunerada. Considero que cualquier persona puede aprender a programar y cambiar su futuro, qué mejor que sea de la mano de alguien profesional como FixterGeek." </p>

                                    <p>— Oscar Villeada</p>
                                </div>
                            </div>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{ backgroundImage: `url('${carlitos}')` }}></div>
                                <div className="testimonio">
                                    <span className="signo">“</span>  <p> Tomar un FixterCamp está lejos de ser un simple curso, es un acercamiento a mundo real de la tecnología y las grandes ideas, aprendí de forma práctica y dinámica temas complejos lo cual profesionalizó mi carrera como developer y me impulso a emprender mi propio negocio.</p>
                                    <p>— Carlos Mendoza</p>
                                </div>
                            </div>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{ backgroundImage: `url('${jorge}')` }}></div>
                                <div className="testimonio">
                                    <span className="signo">“</span>  <p> Estudie la universidad y puedo decir que el ritmo de aprendizaje no se compara con el que Fixter te puede dar en tan solo unas semanas. Además de aprender tecnologías modernas, los profesores hacen algo más que enseñar y es que todos tienen lo que pocos programadores, calidad humana para compartir sus conocimientos.</p>
                                    <p>— Jorge García</p>
                                </div>
                            </div>


                        </Carousel>
                    </div>
                </section>
                <section className="newsletter">
                    <h2 >¿Quieres mantenerte al día sobre los próximos cursos y eventos? <br /> Inscríbete a nuestro newsletter
                    </h2>
                    <br />
                    <div>
                        <input type="email" placeholder="contacto@fixter.org" />
                        <button>Enviar</button>
                    </div>
                </section>

            </section>
        )
    }
}
function mapState() { return {} }
export default connect(mapState, { getBootcampsAction })(HomeContainer)