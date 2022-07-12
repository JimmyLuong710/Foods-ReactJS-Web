import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import adminReducer from './slice/adminSlice'
import userReducer from './slice/userSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({
    auth: authReducer,
    // admin: adminReducer,
    // user: userReducer
})
  const persistedReducer = persistReducer(persistConfig, authReducer)


  export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        admin: adminReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export let persistor = persistStore(store)
  

export default store