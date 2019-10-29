import React, { Component } from 'react';
import "./Bootcamp.css"
import { Tabs } from 'antd';


const { TabPane } = Tabs;

class BootcampDescript extends Component {
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
                <section className="container-bootcamp">
                    <div className="container-summary">
                        <h2 className="name-descript">Python</h2>
                        <hr/>
                        <p className="description"> Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus asperiores cum
                            odit praesentium qui quos repellat sed voluptate.
                            Alias at impedit incidunt nam nulla repellat!
                            Architecto explicabo in natus voluptatum. </p>
                        <button className="btn-float">Get Started</button>
                        <div>
                            <h3 style={{marginBottom:"8px"}}>Top Mentors</h3>

                            <div className="teacher-camp">
                                <div className="teacher-img"></div>
                                <h4>Brenda Ortega</h4>
                            </div>
                            <div className="teacher-camp">
                                <div className="teacher-img"></div>
                                <h4>Brenda Ortega</h4>
                            </div>
                            <div className="teacher-camp">
                                <div className="teacher-img"></div>
                                <h4>Brenda Ortega</h4>
                            </div>
                        </div>
                    </div>
                    <div className="container-content">
                        <div className="week">
                            <h3>Semana 1</h3>
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
                        </div>
                        <div className="week">
                            <h3>Semana 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ipsam nam natus optio
                                pariatur perferendis rerum suscipit, voluptates.
                                Beatae consectetur distinctio excepturi molestias
                                perferendis provident sapiente totam voluptates.
                                Cumque, quam quis.</p>
                        </div>
                       

                    </div>
                </section>
            </section>
        )
    }
}

export default BootcampDescript;