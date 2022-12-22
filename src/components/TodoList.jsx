import { ItemList } from "./ItemList"

export const TodoList = ({ todos = [], handleRemove }) => {
    return (
        <ul className="list-group">
            {
                todos.map( todo => ( <ItemList key={todo.id} todo={todo} handleRemoveTodo={ handleRemove }/> ))
            }
        </ul>
    )
}
