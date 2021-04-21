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

export const getPolls = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/polls/")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.GET_POLLS,
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

export const getVoivodeships = () => {
    return {
        type: actions.GET_VOIVODESHIPS,
        payload: {}
    }
}

export const setInfo = (info) => {
    return {
        type: actions.SET_INFO,
        payload: info
    }
}

export const setInfoAdmin = (info) => {
    return {
        type: actions.SET_INFO_ADMIN,
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

export const findUser = (poll) => {
    return (dispatch) => {
        dispatch({
            type: actions.FIND_USER,
            payload: poll
        })
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
                    type: actions.UPDATE_POLLS,
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
