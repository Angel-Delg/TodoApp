export const ItemList = ({ todo : {id, description}, handleRemoveTodo }) => {
    return (
        <li className="list-group-item border-left-3 border-left-primary d-flex justify-content-between align-items-center">
            <h3> { description } </h3>
            <div>
                <button className="btn btn-success m-2">Completar</button>
                
                <button
                    onClick={ (e) => handleRemoveTodo(id) } 
                    className="btn btn-danger m-2">Borrar</button>
            </div>
        </li>
    )
}