import React from 'react';
import "./CourseCard.css"
import badge from "../../assets/badget1.png"
import {Link} from "react-router-dom";

export const CardBootcamp = ({image, name, descript, lecciones, tiempo, link, link2, action}) => {


    return (
        <div className="bootcamp-card">
            <Link to={link}>
                <div className="bootcamp-badge">
                <img className="badge" src={image} alt="badge-curso"/>
            </div>
            <br/>
            <h2>{name}</h2>
            <p>{descript}</p>
            <p>{lecciones} <span>&bull;</span> {tiempo}</p>
            </Link>
            <hr/>
            <div className="bootcamp-alumni">
       {/*         <div className="box-alumni">
                    <div className="alumni" style={{backgroundImage:`url("https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/71338768_2399328773495830_5281049889755627520_o.jpg?_nc_cat=100&_nc_oc=AQmKoPfk1US-8J1eOAW1li5YhtiYQw3MdM9Lddof42yVoSZjdAPK4EX-tXPQrqd7aDc&_nc_ht=scontent-qro1-1.xx&oh=b884bcb60961c77b95401bd713f5c272&oe=5E1ABA99")`}}>

                    </div>
                    <div className="alumni dos" style={{backgroundImage:`url("https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/71338768_2399328773495830_5281049889755627520_o.jpg?_nc_cat=100&_nc_oc=AQmKoPfk1US-8J1eOAW1li5YhtiYQw3MdM9Lddof42yVoSZjdAPK4EX-tXPQrqd7aDc&_nc_ht=scontent-qro1-1.xx&oh=b884bcb60961c77b95401bd713f5c272&oe=5E1ABA99")`}}>

                    </div>
                    <div className="alumni dos" style={{backgroundImage:`url("https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/71338768_2399328773495830_5281049889755627520_o.jpg?_nc_cat=100&_nc_oc=AQmKoPfk1US-8J1eOAW1li5YhtiYQw3MdM9Lddof42yVoSZjdAPK4EX-tXPQrqd7aDc&_nc_ht=scontent-qro1-1.xx&oh=b884bcb60961c77b95401bd713f5c272&oe=5E1ABA99")`}}>

                    </div>
                    <div className="alumni dos circle" >
                        <p>+23</p>
                    </div>
                </div>*/}
                <Link to={link2}>
                    <button>
                        {action}
                    </button>
                </Link>



                {/*        <div className="author-photo" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/64253119_2199919590103417_3376381376021397504_n.jpg?_nc_cat=111&_nc_oc=AQmnpwdGmMvQxzcFHhL-z0oB6eFZUOCYz2jbguwQCfEKlGCvQYFv0q19ysD9lWhvIsc&_nc_ht=scontent.fmex6-1.fna&oh=4afd8190cf626eebf98fdcd68f81821f&oe=5D84A0CC")`}}>
                    </div>*/}
               {/* <div className="autor-info">

                </div>*/}
            </div>

        </div>
    );
};