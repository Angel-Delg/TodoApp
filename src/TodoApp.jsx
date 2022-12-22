import { TodoAddForm } from "./components/TodoAddForm"
import { TodoList } from "./components/TodoList"
import { useTodo } from "./hooks/useTodo"

export const TodoApp = () => {
    
    const { todos, handleAddTodo } = useTodo()

    return (
        <div className="container-xl container-xl-fluid m-auto row ">
            <h2 className="bg-dark p-3 text-white col-12">
                Todo App
            </h2>

            <section className="col-7">
                <TodoList todos={ todos } />
            </section>

            <section className="col-5">
                <TodoAddForm addNewTodo={ handleAddTodo }/>
            </section>

        </div>
    )
}