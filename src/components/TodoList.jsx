import { ItemList } from "./ItemList"

export const TodoList = ({ todos = [] }) => {
    return (
        <ul className="list-group">
            {
                todos.map( todo => ( <ItemList key={todo.id} todo={todo} /> ))
            }
        </ul>
    )
}
