import {AppActionType, AppThunk} from "./reduxStore";
import {SetUserDataThunk} from "./authReducer";


export enum ACTION_TYPE {
    SET_INITIALIZED = 'SOC/APP/SET_INITIALIZED',
}



const initialState = {
    initialized: false

}
type AppInitialType = {
    initialized:Boolean
}

export const AppReducer = (state: AppInitialType = initialState, action: AppActionType):AppInitialType => {
    switch (action.type) {
        case ACTION_TYPE.SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const SetInitialized = () => ({
    type: ACTION_TYPE.SET_INITIALIZED,
})

export type InitializedTypeAc = ReturnType<typeof SetInitialized>

export const InitializeApp = (): AppThunk => (dispatch) => {
    let result:any = dispatch(SetUserDataThunk(true))
    console.log(result)
    result.then(() => {
        dispatch(SetInitialized())
        console.log(result)
    })
}





