import * as actions from "./actionTypes";
import axios from "axios";

export const getUsers = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/users/")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.GET_USERS,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const logInUser = (user) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/users/login/user", {pesel: user.pesel})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.LOG_IN,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}
export const logInAdmin = (user) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/users/login/admin", {admin_id: user.admin_id})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.LOG_IN,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const logOut = () => {
    return {
        type: actions.LOG_OUT,
        payload: {}
    }
}

export const setInfo = (info) => {
    return {
        type: actions.SET_INFO,
        payload: info
    }
}

export const sendPolls = (poll) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/polls/", {...poll})
            .then(response => {
                return response.data
            })
            .then(data => {
                console.log(data);
                dispatch({
                    type: actions.SEND_POLLS,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const getPollByPesel = (pesel) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3000/polls/${pesel}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                console.log(data);
                if (data.length!==0) {
                    console.log("setting to true")
                    dispatch({
                        type: actions.SUCCESS,
                        payload: {}
                    })
                }
                else {
                    console.log("setting to false")
                dispatch({
                    type: actions.FAILURE,
                    payload: {}
                })
            }
            })
            .catch(error => {
                dispatch({
                    type: actions.FAILURE,
                    payload: {}
                })
                // throw (error);
            });
    };
}

export const register = (info) => {
    return () => {
        return axios.post("http://localhost:3000/users/registration", {...info})
            .then(response => {
                return response
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const findUser = (user) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/users/getByPESEL", {pesel: user.pesel})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.FIND_USER,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const updateUser = (update) => {
    return (dispatch) => {
        return axios.patch("http://localhost:3000/polls/patch", {...update})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.SEND_POLLS,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const deleteUser = (pesel) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:3000/users/deleteByPESEL/${pesel}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.DELETE_USER
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}
