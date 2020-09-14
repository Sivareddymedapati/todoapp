import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import TaskReducer from '../redux/TaskReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'




const store = createStore(TaskReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store


