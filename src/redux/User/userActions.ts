import { USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./userTypes";
import { Dispatch } from "redux";
import { Action } from "./userReducers";
import auth from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const register = (email: string, password: string) => async(dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const res = await createUserWithEmailAndPassword(auth, email, password);
        const data = res.user;


        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log(error);
        dispatch({
            type: USER_REGISTER_FAILURE,
            payload: `${error.message}`,
        })
    }
}

export const login = (email: string, password: string) => async(dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const res = await signInWithEmailAndPassword(auth, email, password);
        const data = res.user;


        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log(error);
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: `${error.message}`,
        })
    }
}

export const logout = () => async (dispatch: Dispatch<Action>) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}