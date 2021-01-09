import API from "../API/API";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";


export enum ACTION_TYPE {
    SET_USER_DATA = 'SOC/AUTH/SET_USER_DATA',
}
export type authACTypes =
    ReturnType<typeof SetUserData>
type authDispatchType = Dispatch<authACTypes>

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
}
type ThunkTypesAuth  = ThunkAction<void, AppStateType, unknown, authACTypes>
const AuthReducer = (state: AuthType = initialState, action: authACTypes) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                data: {
                    ...action.data
                },
                isAuth: true
            }
        default:
            return state
    }
}

export const SetUserData = (data: DataUserType): SetUserData => ({type:ACTION_TYPE.SET_USER_DATA, data})

export const SetUserDataThunk = ():ThunkTypesAuth => (dispatch:authDispatchType) => {
    API.authMe().then((res: any) => {
        if (res.resultCode === 0){
            dispatch(SetUserData(res.data))
        }
    })
}

export default AuthReducer;

