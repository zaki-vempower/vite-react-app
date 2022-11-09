import { API_LOGIN } from "../actionTypes";



export function apiLogin(data) {
    return (dispatch,getState) => {
        const state = getState()
        console.log('sdsds',state)
        return dispatch({
            type:API_LOGIN,
            data
        })
    }
    
}