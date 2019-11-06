import React from 'react';
import "./Bootcamp.css"
import moment from 'moment'

export const StepUno = ({ selected }) => {
    let title = selected ? selected.title : "Fundamentos del Desarrollo Web | Bootcamp Online"
    let startDate = selected ? selected.startDate : "01/10/2020"
    let price = selected ? selected.price : 6000
    price = String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    return (
        <div className="step">
            <h2>{title}</h2>
            <p>{moment(startDate).format("ll")}</p>
            <p><strong>$ {price}.00MXN</strong></p>
            <br />
            <p>
                Este es nuestro segundo bootcamp online, tú formarás parte de
                nuestros alumnos pioneros y tendrás acceso a descuentos de por vida
                además de la oportunidad de inscribirte a ediciones presenciales
                siempre con un precio mucho menor.
                El precio de este bootcamp online
                es simbólico, ya que las siguientes ediciones no tendran este precio.
                    </p>
        </div>
    );
};