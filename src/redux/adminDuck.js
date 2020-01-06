import axios from 'axios'
import { baseURL as url } from './baseURL'
import { logOutAction } from './userDuck'

const baseURL = url + '/admin'

let initial = {
    editingBootcamp: null,
    users: {
        array: [],
        object: {},
        current: {},
        new: {}
    },
    fetching: false,
    error: null
}
function reducer(state = initial, action) {
    switch (action.type) {
        case SET_EDITING_BOOTCAMP:
            return { ...state, editingBootcamp: action.payload }

        case GET_USERS:
            return { ...state, fetching: true }
        case GET_USERS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_USERS_SUCCESS:
            return { ...state, fetching: false, ...action.payload }
        default:
            return { ...state }
    }
}

// constants

const SAVE_USER = "SAVE_USER"
const SAVE_USER_ERROR = "SAVE_USER_ERROR"
const SAVE_USER_SUCCESS = "SAVE_USER_SUCCESS"

const SET_EDITING_BOOTCAMP = "SET_EDITING_BOOTCAMP"

const GET_USERS = "GET_USERS"
const GET_USERS_ERROR = "GET_USERS_ERROR"
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"



//thunks

export function saveUserAction(user) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: SAVE_USER })
        return axios.patch(`${baseURL}/users/${user._id}`, user, { headers: { Authorization: token } })
            .then(res => {
                dispatch({ type: SAVE_USER_SUCCESS, payload: { ...res.data } })
                getUsersAction()(dispatch, getState)
                return res
            })
            .catch(err => {
                if (!err.response) return dispatch({ type: SAVE_USER_ERROR, payload: "Algo falló" })
                if (err.response.data.message === "Token is invalid or has expired 👀") logOutAction()(dispatch)
                dispatch({ type: SAVE_USER_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export function setEditingBootcampAction(id) {
    return (dispatch) => {
        dispatch({ type: SET_EDITING_BOOTCAMP, payload: id })
    }
}

export function getUsersAction() {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: GET_USERS })
        return axios.get(`${baseURL}/users`, { headers: { Authorization: token } })
            .then(res => {
                let obj = {}
                res.data.forEach(item => obj[item._id] = item)
                dispatch({ type: GET_USERS_SUCCESS, payload: { users: { array: res.data, object: obj } } }) // changethis for more than 1 bootcamp at a time
                return res
            })
            .catch(err => {
                if (!err.response) return dispatch({ type: GET_USERS_ERROR, payload: "Algo falló" })
                if (err.response.data.message === "Token is invalid or has expired 👀") logOutAction()(dispatch)
                dispatch({ type: GET_USERS_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export default reducer