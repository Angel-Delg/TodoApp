import { TodoAddForm } from "./components/TodoAddForm"
import { TodoList } from "./components/TodoList"
import { useTodo } from "./hooks/useTodo"

export const TodoApp = () => {

    const { todos ,allTodos ,handleAddTodo, handleRemoveTodo, handleToggleTodo} = useTodo()

    return (
        <div className="container-xl container-xl-fluid m-auto row ">
            <h2 className="bg-dark p-3 text-white col-12">
                Todo App
            </h2>

            { todos.length > 0 && <h3 className='alert-secondary'> Total de tareas: { allTodos } </h3>}

            <section className="col-7">
                <TodoList todos={ todos } handleRemove={ handleRemoveTodo } handleToggle={  handleToggleTodo }/>
            </section>

            <section className="col-5">
                <TodoAddForm addNewTodo={ handleAddTodo }/>
            </section>

        </div>
    )
}