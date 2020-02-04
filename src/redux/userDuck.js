import axios from 'axios'
import { baseURL } from './baseURL'

let initial = {
    loggedIn: false,
    bootcamps: []
}
function reducer(state = initial, action) {
    switch (action.type) {
        case UPDATE_PASSWORD:
            return { ...state, fetching: true }
        case UPDATE_PASSWORD_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case UPDATE_PASSWORD_SUCCESS:
            return { ...state, fetching: false, ...action.payload, error: null }

        case RECOVER_PASSWORD:
            return { ...state, fetching: true }
        case RECOVER_PASSWORD_ERROR:
            return { ...state, error: action.payload, fetching: false }
        case RECOVER_PASSWORD_SUCCESS:
            return { ...state, fetching: false }

        case MAKE_BOOTCAMP_PURCHASE:
            return { ...state, fetching: true }
        case MAKE_BOOTCAMP_PURCHASE_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case MAKE_BOOTCAMP_PURCHASE_SUCCESS:
            return { ...state, fetching: false, ...action.payload, error: null }

        case UPDATE_PROFILE:
            return { ...state, fetching: true }
        case UPDATE_PROFILE_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case UPDATE_PROFILE_SUCCESS:
            return { ...state, fetching: false, ...action.payload, error: null }

        case LOGOUT:
            return { ...initial }

        case LOGIN_SUCCESS:
            return { ...state, fetching: false, ...action.payload, loggedIn: true, error: null }
        case LOGIN_ERROR:
            return { ...state, fetching: false, error: action.payload, loggedIn: false }
        case LOGIN:
            return { ...state, fetching: true }

        case CREATE_ACCOUNT_SUCCESS:
            return { ...state, fetching: false, ...action.payload, loggedIn: true, error: null }
        case CREATE_ACCOUNT_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case CREATE_ACCOUNT:
            return { ...state, fetching: true }

        case "GET_INITIAL_DATA":
            let { user } = localStorage
            if (user) return { ...JSON.parse(user), loggedIn: true }
            else return state
        default:
            return state
    }
}

// constants
const UPDATE_HOMEWORK = "UPDATE_HOMEWORK"

const UPDATE_PASSWORD = "UPDATE_PASSWORD"
const UPDATE_PASSWORD_ERROR = "UPDATE_PASSWORD_ERROR"
const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS"

const RECOVER_PASSWORD = "RECOVER_PASSWORD"
const RECOVER_PASSWORD_SUCCESS = "RECOVER_PASSWORD_SUCCESS"
const RECOVER_PASSWORD_ERROR = "RECOVER_PASSWORD_ERROR"

const MAKE_BOOTCAMP_PURCHASE = "MAKE_BOOTCAMP_PURCHASE"
const MAKE_BOOTCAMP_PURCHASE_ERROR = "MAKE_BOOTCAMP_PURCHASE_ERROR"
const MAKE_BOOTCAMP_PURCHASE_SUCCESS = "MAKE_BOOTCAMP_PURCHASE_SUCCESS"

const UPDATE_PROFILE = "UPDATE_PROFILE"
const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR"
const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS"

const CREATE_ACCOUNT = "CREATE_ACCOUNT"
const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS"
const CREATE_ACCOUNT_ERROR = "CREATE_ACCOUNT_ERROR"

const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_ERROR = "LOGIN_ERROR"

const LOGOUT = "LOGOUT"


// thunks
export function updatePasswordAction(newPass) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: UPDATE_PASSWORD })
        return axios.post(`${baseURL}/change-password`, { password: newPass }, { headers: { Authorization: token } })
            .then(res => {
                dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: { ...res.data } })
                return res
            })
            .catch(err => {
                if (!err || !err.response) return dispatch({ type: UPDATE_PASSWORD_ERROR, payload: "algo malo pasó" })
                dispatch({ type: UPDATE_PASSWORD_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export function recoverPassword(email) {
    return dispatch => {
        dispatch({ type: RECOVER_PASSWORD })
        return axios.post(`${baseURL}/recovery`, { email })
            .then(res => {
                dispatch({ type: RECOVER_PASSWORD_SUCCESS, payload: { ...res.data } })
                return res
            })
            .catch(err => {
                dispatch({ type: RECOVER_PASSWORD_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

// compras

export function makeBootcampPurchasePromoAction({ total, tokenId, tel, email, fullName, bootcampId, bootcampName }) { // {tokenId, bootcampId}
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        let data = {
            tel,
            fullName,
            email,
            tokenId,
            total,
            bootcampId,
            bootcampName
        }
        dispatch({ type: MAKE_BOOTCAMP_PURCHASE })
        return axios.post(`${baseURL}/pay/bootcamp/promo`, data, { headers: { Authorization: token } })
            .then(res => {
                dispatch({ type: MAKE_BOOTCAMP_PURCHASE_SUCCESS, payload: { ...res.data } })
                return res
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: MAKE_BOOTCAMP_PURCHASE_ERROR, payload: err.response.data.details[0].message })
                return err
            })
    }
}

export function makeBootcampPurchaseGroupAction({ total, tokenId, tel, email, fullName }) { // {tokenId, bootcampId}
    return dispatch => {
        let data = {
            tel,
            fullName,
            email,
            tokenId,
            total
        }
        dispatch({ type: MAKE_BOOTCAMP_PURCHASE })
        return axios.post(`${baseURL}/pay/bootcamp/group`, data)
            .then(res => {
                dispatch({ type: MAKE_BOOTCAMP_PURCHASE_SUCCESS, payload: { ...res.data } })
                return res
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: MAKE_BOOTCAMP_PURCHASE_ERROR, payload: err.response.data.details[0].message })
                return err
            })
    }
}


export function makeBootcampPurchaseAction({ tokenId, bootcampId, monthly_installments }) { // {tokenId, bootcampId}
    return (dispatch, getState) => {
        let { user: { token }, bootcamps: { student } } = getState()
        let data = {
            monthly_installments,
            tel: student.tel,
            fullName: student.name,
            email: student.email,
            tokenId,
            bootcampId
        }
        dispatch({ type: MAKE_BOOTCAMP_PURCHASE })
        return axios.post(`${baseURL}/pay/bootcamp/online`, data, { headers: { Authorization: token } })
            .then(res => {
                dispatch({ type: MAKE_BOOTCAMP_PURCHASE_SUCCESS, payload: { ...res.data } })
                return res
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: MAKE_BOOTCAMP_PURCHASE_ERROR, payload: err.response.data.details[0].debug_message })
                return err
            })
        // .catch(err => {
        //     if (!err.response) {
        //         dispatch({ type: MAKE_BOOTCAMP_PURCHASE_ERROR, payload: "Algo falló" })
        //         return "Algo falló, intenta más tarde, no se realizó ningún cobro."
        //     }
        //     console.log(err)
        //     console.log(err.response)
        //     console.log(err.response.data)
        //     console.log(err.response.data.details[0].debug_message)
        //     dispatch({ type: MAKE_BOOTCAMP_PURCHASE_ERROR, payload: err.response.data.message })
        //     return err.response.data.message
        // })
    }
}

export function updateHomeworkAction(update) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: UPDATE_HOMEWORK })
        return axios.patch(`${baseURL}/homework`, update, { headers: { Authorization: token } })
            .then(res => {
                let { user } = localStorage
                if (user) user = JSON.parse(user)
                localStorage.user = JSON.stringify({ ...user, ...res.data })
                dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: { ...res.data } })
                return res
            })
            .catch(err => {
                dispatch({ type: UPDATE_PROFILE_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export function updateProfileAction(update) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: UPDATE_PROFILE })
        return axios.patch(`${baseURL}/self`, update, { headers: { Authorization: token } })
            .then(res => {
                delete res.data.bootcamps
                let { user } = localStorage
                if (user) user = JSON.parse(user)
                localStorage.user = JSON.stringify({ ...user, ...res.data })
                dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: { ...res.data } })
                return res
            })
            .catch(err => {
                dispatch({ type: UPDATE_PROFILE_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export function logOutAction() {
    return dispatch => {
        localStorage.removeItem('user')
        dispatch({ type: LOGOUT })
    }
}

export function loginAction(auth) {
    return dispatch => {
        dispatch({ type: LOGIN })
        return axios.post(`${baseURL}/login`, auth)
            .then(res => {
                localStorage.user = JSON.stringify({ ...res.data.user, token: res.data.token })
                dispatch({ type: LOGIN_SUCCESS, payload: { ...res.data.user, token: res.data.token } })
                return res
            })
            .catch(() => {
                dispatch({ type: LOGIN_ERROR, payload: "El usuario o contraseña son incorrectos" })
                return
            })
    }
}

export function createAccountAction(auth) {
    return dispatch => {
        dispatch({ type: CREATE_ACCOUNT })
        return axios.post(`${baseURL}/signup`, auth)
            .then(res => {
                localStorage.user = JSON.stringify({ ...res.data.user, token: res.data.token })
                dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: { ...res.data.user, token: res.data.token } })
                return res
            })
            .catch(err => {
                if (!err) return
                console.log(err)
                dispatch({ type: CREATE_ACCOUNT_ERROR, payload: err.response.data.message })
                return err
            })
    }
}
export default reducer