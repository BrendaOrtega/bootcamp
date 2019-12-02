import React, { useState, useEffect } from 'react';
import "./Bootcamp.css"
import { Form, Input, Select, Button, Spin } from "antd";
import { connect } from 'react-redux'
import { makeBootcampPurchaseGroupAction } from '../../redux/userDuck'
import toastr from 'toastr'

const { Option } = Select;



const BuyForGift = ({ error, makeBootcampPurchaseGroupAction }) => {

    let [errors, setError] = useState({})
    let [total, setTotal] = useState(2000)
    let [loading, setLoading] = useState(false)
    let [form, setForm] = useState({})
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
        makeBootcampPurchaseGroupAction({ tokenId: token.id, total, tel: form.tel, email: form.email, fullName: form.fullName })
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
        setTotal(Number(value) * 1000)
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
                <h2>Compra el bootcamp para regalar o en grupos</h2>
                <p style={{ color: "green" }}>Esta compra es valida para cualquier bootcamp</p>
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
                    <p>¿Cuantas personas entrarán al bootcamp?</p>
                    <Select defaultValue="2" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                        <Option value="10">10</Option>
                        <Option value="20">20</Option>
                        <Option value="30">30</Option>
                        <Option value="40">40</Option>
                        <Option value="50">50</Option>
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
        </div>
    );
};

function mapState({ user: { error } }) {
    return {
        error
    }
}

export default connect(mapState, { makeBootcampPurchaseGroupAction })(BuyForGift)