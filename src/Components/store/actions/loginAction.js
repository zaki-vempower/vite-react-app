import { API_LOGIN, OPEN_DRAWER } from "../actionTypes";



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

export function handleDrawer(bool) {
    return {
        type: OPEN_DRAWER,
        bool
    }
    
}