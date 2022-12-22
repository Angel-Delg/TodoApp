export const reducerTodo = (initialState = [], action ) => {
    switch(action.type){
        case '[TODO]: add todo':
            return [ ...initialState, action.description ]

        case '[TODO]: remove todo':
            return initialState.filter( todo => todo.id !== action.description)

        case '[TODO]: toogle  todo':
            return initialState

        default:
            break
    }

    return initialState
}