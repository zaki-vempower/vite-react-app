import { compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import reducers from './reducers'
// import { appliedMiddlware } from './middleware/middleware'
import { configureStore } from '@reduxjs/toolkit/dist'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: []
}

// const persistedReducer = persistReducer(persistConfig, reducers)
// export const store = configureStore(
//     persistedReducer,
//     composeEnhancer(applyMiddleware(thunk, apiMiddleware, contactListMiddleware))
//   )
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export  const globalDispatch = store.dispatch;
export const globalState = store.getState;




