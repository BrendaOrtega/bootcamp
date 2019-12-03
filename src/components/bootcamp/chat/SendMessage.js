import React from 'react';
import "./Chat.css"
import FontAwesome from "react-fontawesome"



export const SendMessage = ({ }) => {
    return (
        <div className="input-message">
            <textarea  placeholder="Escribe tu mensaje ">

            </textarea>
            <button className="btn-send-message">
                <FontAwesome name="paper-plane"/>
            </button>
        </div>
    );
};