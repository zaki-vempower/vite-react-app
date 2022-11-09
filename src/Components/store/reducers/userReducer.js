import {
    API_LOGIN
  } from '../actionTypes'
  
  const initialState = {
    loggedInData: {},
    isLoading: false,
    isFailed: false,
    erroeMessage: '',
    access_Token: '',
    data: '',
    fcmToken: null,
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
            console.log('acgionnnn',action)
            return {
                ...state,
                showLogin: action.data
            }
  
      default:
        return state
    }
  }
  