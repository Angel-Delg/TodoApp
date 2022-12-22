export const ItemList = ({todo}) => {
    return (
        <li className="list-group-item border-left-3 border-left-primary d-flex justify-content-between align-items-center">
            <h3> { todo.description } </h3>
            <div>
                <button className="btn btn-success m-2">Completar</button>
                <button className="btn btn-danger m-2">Borrar</button>
            </div>
        </li>
    )
}