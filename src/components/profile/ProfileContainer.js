import React, { Component } from 'react';
import "./Profile.css"
import { Profile } from "./Profile"
import { connect } from 'react-redux'
import { updateProfileAction, updatePasswordAction } from '../../redux/userDuck'
import toastr from 'toastr'

class ProfileContainer extends Component {

    componentDidMount() {
        if (!this.props.loggedIn) {
            this.props.history.push('/login')
        }
    }

    updateProfile = update => {
        this.props.updateProfileAction(update)
            .then(() => {
                if (this.props.error) toastr.error(this.props.error)
                else toastr.success("Perfil actualizado")
            })
    }

    updatePassword = newPass => {
        if (!newPass) return
        this.props.updatePasswordAction(newPass)
            .then(() => {
                if (this.props.error) toastr.error(this.props.error)
                else toastr.success("Perfil actualizado")
            })
    }

    render() {
        return (
            <div >
                <Profile updatePassword={this.updatePassword} updateProfile={this.updateProfile} {...this.props.user} />
            </div>
        )
    }
}

function mapState({ user, bootcamps: { object, array } }) {
    // Nos aseguramos que el usuario vea las actualizaciones del bootcamp sin cerrar sesion
    let bootcamps = []
    if (user.bootcamps.length) bootcamps = [...user.bootcamps]
    if (user.bootcamps && array.length > 0) bootcamps = user.bootcamps.map(b => object[b._id])
    user.bootcamps = bootcamps
    return {
        user,
        ...user,
        loggedIn: user.loggedIn,
        bootcamps
    }
}

export default connect(mapState, { updateProfileAction, updatePasswordAction })(ProfileContainer)