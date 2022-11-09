import {
    API_LOGIN, OPEN_DRAWER
  } from '../actionTypes'
  
  const initialState = {
    drawerHandle: false,
    isCustomView: false,
    showLogin: true,
    deepLink: null,
    suspendedPage: {
      isSupended: false,
      subscriptionData: null
    }
  }
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_LOGIN:
          return {
            ...state,
            showLogin: action.data
          }
          case OPEN_DRAWER:
          console.log('acgionnnn',action)
          return {
            ...state,
            drawerHandle: action.bool
          }
  
      default:
        return state
    }
  }
  