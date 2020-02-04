import React, { useState, useEffect, useRef } from 'react';
import "./Profile.css"
import { Tabs, Input } from 'antd';
import { UserCourses } from "./UserCourses";
import { UserBootcamp } from "./UserBootcamp";
import { UserBooks } from "./UserBooks";
import { UserEvents } from "./UserEvents";
import { storage } from '../../firebase'

const { TabPane } = Tabs;

function callback(key) {
    //console.log(key);
}

//let photo = "https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/56182421_2071292546299456_5483132443244363776_o.jpg?_nc_cat=103&_nc_oc=AQlzvSvRjV3VJKeZMVeHYbvuFokkxJNTZjn-HwHRVhg69AOO1kVJMybsT04HcActbpY&_nc_ht=scontent.fmex6-1.fna&oh=551c5407a88f347d7b5088bdfdf40c5f&oe=5DAD6FFD"
let photo = "https://media.licdn.com/dms/image/C4E0BAQGdnoI0RtTQnw/company-logo_200_200/0?e=2159024400&v=beta&t=jkaLWEXwLbkEejHmsvuQq9YD_qvbMIbYqbziiRb6NQs"

export const Profile = ({ _id, bootcamps, updateProfile, displayName, photoURL = photo, country, city, email, changePass, updatePassword }) => {

    // console.log(bootcamps)

    let input = useRef()
    let [profile, setProfile] = useState({})
    let [newPass, setNewPass] = useState(null)

    useEffect(() => {
        setProfile({ displayName })
    }, [])

    function onChange({ target: { name, value } }) {
        setProfile({ ...profile, [name]: value })
    }

    function storeNewPass({ target: { value } }) {
        setNewPass(value)
    }

    function uploadImage({ target: { files } }) {
        if (!files[0]) return
        storage.ref('profilePics').child(_id).put(files[0])
            .then(snap => {
                return snap.ref.getDownloadURL()
            })
            .then(url => {
                setProfile({ ...profile, photoURL: url })
            })
    }

    return (
        <section className="perfil">
            <div style={{ textAlign: "center" }} className="custome">
                <div className="user-portada">
                </div>
                <div className="fl">

                    <div style={{ backgroundImage: `url("${profile.photoURL || photoURL}")` }} className="user-photo">
                        <div onClick={() => input.current.click()} className="img-overlay">
                            EDITAR IMAGEN
                        </div>
                    </div>
                </div>
                <button onClick={() => updateProfile(profile)} style={styles.button} >Actualizar Perfil</button>
                <div className="user-descript">
                    <Input
                        name="displayName"
                        onChange={onChange}
                        value={profile.displayName}
                        className="user-descript-input"
                        placeholder="Nombre de usuario"
                    />
                    {changePass && <div>
                        <h2 style={{ color: "red" }} >Debes actualizar tu contraseña:</h2>
                        <Input
                            name="newPassword"
                            onChange={storeNewPass}
                            value={newPass}
                            className="user-descript-input"
                            placeholder="Debes crear un password nuevo"
                        />
                        <br />
                        <br />
                        <button onClick={() => updatePassword(newPass)} style={styles.button}> Actualizar password </button>
                    </div>}
                    {/* <Input
                        name="email"
                        onChange={onChange}
                        value={profile.email}
                        style={{ marginTop: 10 }}
                        className="user-descript-input"
                        placeholder="Correo electrónico para notificaciones"
                    /> */}
                    <p style={{ marginTop: 10 }} >{email}</p>
                </div>

            </div>
            <section className="contenido">
                <Tabs defaultActiveKey="1" onChange={callback}>

                    <TabPane tab="Bootcamp" key="1">
                        <UserBootcamp bootcamps={bootcamps} />
                    </TabPane>
                    <TabPane tab="Cursos" key="2">
                        <UserCourses />
                    </TabPane>
                    <TabPane tab="Libros" key="3">
                        <UserBooks />
                    </TabPane>
                    <TabPane tab="Eventos" key="4">
                        <UserEvents />
                    </TabPane>

                </Tabs>
            </section>
            <input onChange={uploadImage} ref={input} hidden type="file" accept="image/*" />
        </section>
    );
};

let styles = {
    button: {
        background: "#962f35",
        color: "white",
        cursor: "pointer",
        //  position: "absolute",
        // margin: "220px 10px",
        top: 0, left: 0,
        border: "none",
        padding: "5px 10px"
    }
}