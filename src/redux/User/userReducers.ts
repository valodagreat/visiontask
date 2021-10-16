import { USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./userTypes";

export type Action = {
    type: string,
    payload?: Object | string,
}

interface UserState {
    userInfo?: Object,
    loading?: boolean,
    error?: string,
}

export const userRegisterReducer = (state: UserState = {},action: Action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST :
            return (
                {
                    ...state,
                    loading : true
                }
            )
        case USER_REGISTER_SUCCESS :
            return({
                loading : false,
                userInfo: action.payload
            })
    
        case USER_REGISTER_FAILURE :
            return({
                loading : false,
                error : action.payload
            })
        default :
            return state
}
}

const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo') || "null");

export const userLoginReducer = (state: UserState = {userInfo: userInfoFromStorage },action: Action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST :
            return (
                {
                    ...state,
                    loading : true
                }
            )
        case USER_LOGIN_SUCCESS :
            return({
                loading : false,
                userInfo: action.payload
            })
    
        case USER_LOGIN_FAILURE :
            return({
                loading : false,
                error : action.payload
            })
        case USER_LOGOUT :
            return{
                userInfo: null
            }
        default :
            return state
}
}