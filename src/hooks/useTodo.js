import { useReducer, useEffect } from 'react'
import { reducerTodo } from '../helpers/reducerTodo'

export const useTodo = () => {
    const [todos, dispatch] = useReducer( reducerTodo , [])

    const handleAddTodo = (todo) => {
        dispatch({
            type:'[TODO]: add todo',
            description: todo
        })
    } 
    return {
        todos,
        handleAddTodo
    }
}