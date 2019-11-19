import React from 'react';
import "./Nav.css"
import { Link } from "react-router-dom";
import logo from "../../assets/geek_completo.png"
import FontAwesome from "react-fontawesome"
import avatar from "../../assets/avatar.png"

export const NavBarDisplay = ({ loggedIn, logOut }) => {
    return (
        <div className="nav">
            <Link to="/">
                <img className="logo" src={logo} alt="" />
            </Link>
            <div className="pestanas web">
                <Link to="/bootcamp">
                    <p>Bootcamp</p>
                    <hr className="red-line" />
                </Link>
                <Link to="/courses">
                    <p>Cursos</p>
                    <hr className="red-line" />
                </Link>

                <Link to="/apply?b=5dc1db06cd0b842984edca7c">
                    <button className="btn-aply">Aplicar</button>
                </Link>

                <hr className="line" />
                {loggedIn ?
                    <div className="user-log dropdown">
                        <Link to="/profile">
                            <img className="avatar" src={avatar} alt="avatar" />
                        </Link>
                        <div id="user-drop" className="dropdown-content">
                            <Link to="/profile">
                                <p>Perfil</p>
                            </Link>
                            <p onClick={logOut} className="linea">Cerrar Sesión</p>

                        </div>

                    </div> :
                    <Link to="/login">
                        <p>Login</p>
                        <hr className="red-line" />
                    </Link>}
            </div>
            <div className="movil dropdown">
                <FontAwesome name="bars" />
                <div className="dropdown-content">
                    <Link to="/bootcamp">
                        <p>Bootcamp</p>
                    </Link>
                    <Link to="/courses">
                        <p>Cursos</p>
                    </Link>
                    {loggedIn ?
                        <div>
                            <Link to="/profile">
                                <p>Perfil</p>
                            </Link>
                            <p onClick={logOut} className="linea">Cerrar Sesión</p></div> :
                        <Link to="/login">
                            <p className="linea">Login - {loggedIn}</p>
                        </Link>}
                </div>
            </div>
        </div>
    );
};