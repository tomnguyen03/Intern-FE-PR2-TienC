import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'src/pages/Auth/auth.slice'
import appReducer from 'src/app.slice'
const rootReducer = {
  app: appReducer,
  auth: authReducer
}
const store = configureStore({
  reducer: rootReducer
})
export default store
