import React, { useState, useEffect } from 'react';
import "./Bootcamp.css"
import { Form, Input, Select, Button, Spin } from "antd";
import { connect } from 'react-redux'
import { makeBootcampPurchasePromoAction } from '../../redux/userDuck'
import toastr from 'toastr'

const { Option } = Select;



const PromoCiberMonday = ({ bootcamps, error, makeBootcampPurchasePromoAction }) => {

    let [errors, setError] = useState({})
    let [total, setTotal] = useState(250)
    let [loading, setLoading] = useState(false)
    let [form, setForm] = useState({ bootcampId: "5de52b17734c4163308b63fe" })
    let [success, setSuccess] = useState(false)

    useEffect(() => {
        if (error) {
            setLoading(false)
            toastr.error(error)
            console.log(error)
        }
    }, [error])

    useEffect(() => {
        // conekta
        let script = document.createElement('script')
        script.src = "https://cdn.conekta.io/js/latest/conekta.js"
        script.async = true
        document.body.appendChild(script)
        script.onload = () => {
            window.Conekta.setPublicKey("key_WjR6vbjKGjpeL4sQCwJYCVw")
        }

    }, [])

    function makePurchase() {
        if (!_validate()) return
        // loading
        setLoading(true)
        // create form
        let sendForm = {
            "card": {
                "number": form.number,
                "name": form.cardName,
                "exp_year": form.year,
                "exp_month": form.month,
                "cvc": form.cvc
            }
        }
        // tokenize
        window.Conekta.Token.create(
            sendForm,
            conektaSuccessResponseHandler,
            conektaErrorResponseHandler
        );
        // send to backend
        // loading
        // redirect
    }

    function conektaSuccessResponseHandler(token) {
        // action para enviar token
        makeBootcampPurchasePromoAction({ bootcampName: form.bootcampName, tokenId: token.id, total, tel: form.tel, email: form.email, fullName: form.fullName, bootcampId: form.bootcampId })
            // camba esto !!!    
            .then(() => {
                setLoading(false)
                if (error) toastr.error(error)
                else {
                    toastr.success("Pago realizado con éxito.")
                    setSuccess(true)
                }
            })
            .catch(e => {
                toastr.error("No se pudo cobrar, intenta de nuevo")
                setLoading(false)
                console.log(e)
            })
    }
    function conektaErrorResponseHandler(response) {
        // this.setState({ error: response.message_to_purchaser })
        // toastr.error(response.message_to_purchaser);
        // this.setState({ loading: false })
    }

    // useEffect(() => {
    //     _validate()
    // }, [student])

    function _validate() {
        let error = {}
        let isValid = true
        if (!form.cardName) {
            error.cardName = "El nombre del tarjetahabiente no puede estar vacio"
            isValid = false
        }
        if (!form.number || form.number.length < 16) {
            error.number = "Verifica el numero de la tarjeta"
            isValid = false
        }
        if (!form.month || form.month.length < 2) {
            error.month = "Verifica el numero de expiración"
            isValid = false
        }
        if (!form.year || form.year.length < 4) {
            error.year = "El año de expiración debe ser de 4 dígitos"
            isValid = false
        }
        if (!form.cvc || form.cvc.length < 3) {
            error.cvc = "Verifica el código de seguridad"
            isValid = false
        }
        if (!form.fullName || !form.tel || !form.email) {
            error.general = "Completa estos campos"
            isValid = false
        }
        setError(error)
        return isValid
    }

    function onChange({ target: { name, value } }) {
        if (name === "month" && value.length > 2) return
        if (name === "year" && value.length > 4) return
        if (name === "cvc" && value.length > 4) return
        setForm({ ...form, [name]: value })
    }

    function handleChange(value) {
        let b = bootcamps.find(boo => boo._id == value)
        setForm({ ...form, "bootcampId": value, bootcampName: b.title })
        //console.log(form)
        // setTotal(Number(value) * 1000)
    }
    if (success) return (
        <div style={{ minHeight: "72vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="step apply-box">
                <h2>
                    Tu pago fué recibido con éxito, comunicate con nostros para asignar tus lugares en el bootcamp.
        </h2>
                <img width="100%" src="https://www.xovi.com/wp-content/uploads/2017/04/emoji.jpg" alt="emoji" />
                <a style={{ fontSize: "2rem" }} href="https://www.facebook.com/fixterme/">Click aquí</a>
            </div>
        </div>
    )
    return (
        <div style={{ minHeight: "72vh", display: "flex", justifyContent: "center", alignItems: "center" }} className="">
            <div className="step apply-box">
                <h2>Pre ordena cualquiera de nuestros bootcamps que comienzan en 2020 y aparta tu lugar</h2>
                <h4>Con solo <strong>$250.00MXN</strong></h4>
                <h4>Y paga el resto hasta febrero con 50% de descuento</h4>
                <h5><em>Costo real del bootcamp en 2020: $3,000 Tú sólo pagarás: $1,500 (en total)</em></h5>
                <p style={{ color: "green" }}>Esta pre orden es valida para cualquier bootcamp</p>
                <div>
                    <Input
                        name="fullName"
                        value={form.fullName}
                        onChange={onChange}
                        placeholder="Tu nombre completo"
                    />

                    <Input
                        name="tel"
                        value={form.tel}
                        onChange={onChange}
                        placeholder="Tu teléfono"
                    />

                    <Input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="Tu correo electrónico"
                    />
                    <p style={{ color: "red" }}>{errors.general}</p>
                    <p>¿A qué bootcamp te gustaría inscribirte para 2020?</p>
                    <Select style={{ width: "100%", outline: "thick double #ca3e47" }} defaultValue={form.bootcampId} onChange={handleChange}>
                        {bootcamps.map((b, i) => {
                            return <option key={i} value={b._id} >{b.title}</option>
                        })}
                    </Select>
                </div>
                <Form.Item
                    hasFeedback
                    help={errors.cardName}
                    validateStatus={errors.cardName && "error"}
                >
                    <Input
                        name="cardName"
                        value={form.cardName}
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
                        value={form.number}
                        onChange={onChange}
                        placeholder="Número de tarjeta"
                    />
                </Form.Item>
                <div className="pay-fl">
                    <label htmlFor="">
                        Mes de expiración
                    <Input
                            name="month"
                            value={form.month}
                            onChange={onChange}
                            placeholder="12"
                        />
                        <span style={{ color: "red" }}>{errors.month}</span>
                    </label>
                    <label htmlFor="">
                        Año de expiración
                    <Input
                            name="year"
                            value={form.year}
                            onChange={onChange}
                            placeholder="2020"
                        />
                        <p style={{ color: "red" }}>{errors.year}</p>
                    </label>
                    <label htmlFor="">
                        Código de seguridad
                    <Input
                            name="cvc"
                            value={form.cvc}
                            onChange={onChange}
                            placeholder="VVV"
                        />
                        <p style={{ color: "red" }}>{errors.cvc}</p>
                    </label>

                </div>

                <br />
                <h1>Total: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00MXN</h1>

                <Button type="primary" disabled={loading} onClick={makePurchase}>
                    {loading ? <Spin /> : "Realizar el pago"}
                </Button>
            </div>{/*// box */}
        </div >
    );
};

function mapState({ user: { error }, bootcamps: { array } }) {
    return {
        error,
        bootcamps: array
    }
}

export default connect(mapState, { makeBootcampPurchasePromoAction })(PromoCiberMonday)