import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './feature'

const store = configureStore({
  reducer: rootReducer,
})

export default store
