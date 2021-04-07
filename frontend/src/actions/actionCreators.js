import * as actions from "./actionTypes";
import axios from "axios";



export const logIn = (user) => {
    return {
        type: actions.LOG_IN,
        payload: user
    }
}

export const logOut = () => {
    return {
        type: actions.LOG_OUT,
        payload: {}
    }
}

export const sendPolls = (poll) => {
    return {
        type: actions.SEND_POLLS,
        payload: poll
    }
}

export const register = (info) => {
    return {
        type: actions.REGISTER,
        payload: info
    }
}

export const findUser = (user) => {
    return {
        type: actions.FIND_USER,
        payload: user
    }
}

export const updateUser = (update) => {
    return {
        type: actions.SEND_UPDATE,
        payload: update
    }
}

export const deleteUser = (pesel) => {
    return {
        type: actions.DELETE_USER,
        payload: pesel
    }
}