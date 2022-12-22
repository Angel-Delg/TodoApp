import { useState } from "react"

export const TodoAddForm = ({ addNewTodo }) => {

    const [input, setInput] = useState('')
    
    const onInputChange = ({ target }) => {
        const { value } = target
        setInput(value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if(input.length <= 2 ) return alert('Ingresa mas caracteres')

        const newTodo = {
            id: crypto.randomUUID(),
            description: input, 
            done: false
        }

        addNewTodo( newTodo )
        setInput('')
    }

    return (
        <form 
            className="form-control"
            onSubmit={ onSubmitForm }
        >
            
            <h2>Agregar Tarea</h2>
            <hr />

            <input 
                onChange={ onInputChange }
                className="form-control"
                type="todo"
                placeholder="¿Qué haremos hoy?"
                name="todo"
                value={ input }
                
            />

            <button
                className="btn btn-outline-primary mt-3 mb-3"
            > Agregar </button>

        </form>
    )
}
