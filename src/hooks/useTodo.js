import { useReducer, useEffect } from 'react'
import { reducerTodo } from '../helpers/reducerTodo'

const initializer = () => {
    return JSON.parse(localStorage.getItem('todos'))
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( reducerTodo , [] , initializer )

    useEffect(() =>  {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])


    const handleAddTodo = (todo) => {
        dispatch({
            type:'[TODO]: add todo',
            description: todo
        })
    } 

    const handleRemoveTodo = id => {
        dispatch({
            type:'[TODO]: remove todo',
            description: id
        })
    }

    const handleToggleTodo = id => {
        dispatch({
            type:'[TODO]: toggle  todo',
            description: id
        })
    }

    return {
        todos,
        allTodos: todos.length,
        handleAddTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}