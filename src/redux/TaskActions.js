import {ADDTODO,DELETETODO} from './TaskTypes'

export const addtodo = (todoData) => {
    console.log(todoData)
    return{
        type:ADDTODO,
        payload:todoData
    } 
}

export const deletetodo = (todoData) => {
    return{
        type:DELETETODO,
        payload:todoData
    }
}

