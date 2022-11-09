// import {
//     API_DASHBOARD,
//     API_LOGIN,
//     DASHBOARD_DATA,
//     JOIN_MEETING,
//     LOGIN_API_DATA,
//     LOGIN_SUCCESS,
//     RECORDING_TYPE,
//     SET_DROPBOX_CODE
//   } from '../actions/actionTypes'
//   import AsyncStorage from '@react-native-async-storage/async-storage'
//   import { apiConfig } from '../../../config'
//   import configs from '../../configs'
//   import { fetchApi } from '../../utils/apiUtil'
//   import { Toast } from 'native-base'
//   import { setAccessToken } from '../../screens/Dashboard/actions'
//   import { MHLogger } from '../../utils/basic'
  
  const apiMiddleware = store => next => action => {
    switch (action.type) {
      case API_LOGIN: {
        // return _apiLogin(store, action)
      }
    //   case JOIN_MEETING: {
    //     return _joinedMeeting(store, action, next)
    //   }
  
    //   case API_DASHBOARD: {
    //     return _apiDashBoard(store, action)
    //   }
  
    //   case RECORDING_TYPE: {
    //     return _setRecordingType(store, action, next)
    //   }
  
    //   case SET_DROPBOX_CODE:
    //     return _apiTokenDropbox(store, action, next)
    }
  
    return next(action)
  }
  


  
  export default apiMiddleware
  