import React, { useState, useEffect } from 'react';
import "./Bootcamp.css"
import { Form, Input, Select } from "antd";
import { connect } from 'react-redux'
import { onChangeStudentAction } from '../../redux/bootcampDuck'


const StepTres = ({ selected, student, onChangeStudentAction }) => {

    let [errors, setError] = useState({})

    useEffect(() => {
        _validate()
    }, [student])

    function _validate() {
        let error = {}
        let isValid = true
        if (!student.cardName) {
            error.cardName = "El nombre del tarjetahabiente no puede estar vacio"
            isValid = false
        }
        if (student.number && student.number.length < 16) {
            error.number = "Verifica el numero de la tarjeta"
            isValid = false
        }
        if (student.month && student.month.length < 2) {
            error.month = "Verifica el numero de expiración"
            isValid = false
        }
        if (student.year && student.year.length < 4) {
            error.month = "El año de expiración debe ser de 4 dígitos"
            isValid = false
        }
        if (student.cvc && student.cvc.length < 3) {
            error.month = "Verifica el código de seguridad"
            isValid = false
        }
        setError(error)
        return isValid
    }

    function onChange({ target: { name, value } }) {
        if (name === "month" && value.length > 2) return
        if (name === "year" && value.length > 4) return
        if (name === "cvc" && value.length > 4) return
        onChangeStudentAction({ ...student, [name]: value })
    }

    return (
        <div className="step">
            <h2>{selected.title} - ${selected.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00MXN</h2>
            <Form.Item
                hasFeedback
                help={errors.cardName}
                validateStatus={errors.cardName && "error"}
            >
                <Input
                    name="cardName"
                    value={student.cardName}
                    onChange={onChange}
                    placeholder="Titular de la tarjeta"
                />
            </Form.Item>
            <Form.Item
                hasFeedback
                help={errors.number}
                validateStatus={errors.number && "error"}
            >

                <Input
                    name="number"
                    value={student.number}
                    onChange={onChange}
                    placeholder="Número de tarjeta"
                />
            </Form.Item>

            <div className="pay-fl">
                <label htmlFor="">
                    Mes de expiración
                    <Input
                        name="month"
                        value={student.month}
                        onChange={onChange}
                        placeholder="Fecha de expiración"
                    />
                    <span style={{ color: "red" }}>{errors.month}</span>
                </label>
                <label htmlFor="">
                    Año de expiración
                    <Input
                        name="year"
                        value={student.year}
                        onChange={onChange}
                        placeholder="2020"
                    />
                    <span style={{ color: "red" }}>{errors.year}</span>
                </label>
                <label htmlFor="">
                    Código de seguridad
                    <Input
                        name="cvc"
                        value={student.cvc}
                        onChange={onChange}
                        placeholder="999"
                    />
                    <span style={{ color: "red" }}>{errors.cvc}</span>
                </label>
            </div>
            <br />
            <Select style={{ width: "100%" }} value={student.monthly_installments} onChange={value => onChange({ target: { name: "monthly_installments", value } })}>
                <option value={1} >De contado</option>
                <option value={3} >3 Meses sin intereses</option>
                <option value={6} >6 Meses sin intereses</option>
            </Select>

        </div>
    );
};

function mapState({ bootcamps: { student } }) {
    return {
        student
    }
}

export default connect(mapState, { onChangeStudentAction })(StepTres)