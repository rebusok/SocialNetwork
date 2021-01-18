import API from "../API/API";
import {AppThunk} from "./reduxStore";
import {stopSubmit} from "redux-form";


export enum ACTION_TYPE {
    SET_USER_DATA = 'SOC/AUTH/SET_USER_DATA',
}

export type authACTypes =
    ReturnType<typeof SetUserData>


const initialState = {
    resultCode: null,
    messages: [],
    data: {
        id: null,
        email: '',
        login: ''
    },
    isAuth: false
}
export type DataUserType = {
    id: number | null
    email: string
    login: string

}
export type AuthType = {
    resultCode: number | null
    messages: Array<string> | []
    data: DataUserType
    isAuth: boolean
}
export type SetUserData = {
    type: ACTION_TYPE.SET_USER_DATA
    data: DataUserType
    isAuth: boolean
}

const AuthReducer = (state: AuthType = initialState, action: authACTypes) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER_DATA:

            return {
                ...state,
                data: {
                    ...action.data
                },
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const SetUserData = (data: DataUserType, isAuth: boolean): SetUserData => ({
    type: ACTION_TYPE.SET_USER_DATA,
    data,
    isAuth
})

export const SetUserDataThunk = (isAuth: boolean): AppThunk => (dispatch) => {
    API.authMe().then((res: any) => {
        if (res.resultCode === 0) {
            dispatch(SetUserData(res.data, isAuth))
        }
    })
}
export const LoginRe = (email: string, password: string, rememberMy: boolean): AppThunk => (dispatch) => {

    API.login(email, password, rememberMy).then(res => {
        if (res.data.resultCode === 0) {
            debugger
            dispatch(SetUserDataThunk(true))
        } else {

            let action = stopSubmit('login', {email: 'Email is wrong'})

            dispatch(action)
        }
    })
}
export const LogOut = (): AppThunk => (dispatch) => {
    API.logOut().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(SetUserData(res.data, false))
        }
    })
}


export default AuthReducer;

