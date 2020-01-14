import React, { Component } from 'react';
import "./Footer.css"
import geeki from "../../assets/geek_2.c7d968e6.png"
import FontAwesome from "react-fontawesome"
import { Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="box-one">
                    <img src={geeki} alt="logo-fixter"/>
                    <h3 style={{color:"white", marginLeft:"18px"}}>FixterGeek</h3>
                </div>
                <div>
                    <h3>Sobre Nosotros</h3>
                    <Link to="/fixter-team">
                        <p>Nuestro Equipo</p>
                    </Link>
                    <Link to="/politicas-de-privacidad-fixter">
                        <p>Políticas de Privacidad</p>
                    </Link>
                    <Link to="/contacto">
                        <p>Contacto</p>
                    </Link>
                </div>
                <div className="rec">
                    <h3>Recursos</h3>
                    <a href="https://medium.com/fixtergeek" target="_blank">
                        <p>Blog</p>
                    </a>
                    <a href="https://open.spotify.com/show/2cFrBnAB5o4Sk6mkU733QX" target="blank">
                        <p>Podcast</p>
                    </a>
                </div>
                <div className="redes">
                    <h3>Síguenos</h3>
                    <a href="https://www.facebook.com/fixterme/" target="blank">
                        <FontAwesome name="facebook"/>
                    </a>
                    <a href="https://wa.me/5217757609276" target="blank">
                        <FontAwesome name="whatsapp"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC2cNZUym14-K-yGgOEAFh6g" target="blank">
                        <FontAwesome name="youtube"/>
                    </a>
                    <a href="https://www.instagram.com/fixtergeek/?hl=es-la" target="blank">
                        <FontAwesome name="instagram"/>
                    </a>

                </div>
            </div>
        )
    }
}

export default Footer;