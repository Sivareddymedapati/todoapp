import {ADDTODO} from './TaskTypes'
import {DELETETODO} from './TaskTypes'
import {Data} from '../Data/Data' 

const initialState = {
   Data:Data
}

const TaskReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADDTODO: console.log(action.payload) 
        return{
            
            
            Data: action.payload
        }
     
        case DELETETODO: return{
            ...state,
            Data: action.payload
     }

        default: return state

     }
  }


export default TaskReducer