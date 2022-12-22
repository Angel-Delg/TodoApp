export const reducerTodo = (initialState = [], action ) => {
    switch(action.type){
        case '[TODO]: add todo':
            return [ ...initialState, action.description ]

        case '[TODO]: remove todo':
            return initialState.filter( todo => todo.id !== action.description )

        case '[TODO]: toggle  todo':
            return initialState.map( todo => {
                if(todo.id === action.description){
                    todo.done = !todo.done
                }
                return todo
            })
        default:
            break
    }

    return initialState
}