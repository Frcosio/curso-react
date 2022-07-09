import { useState } from "react";

const Formulario = () => {

  const [todo, setTodo] = useState({
    todoName:"",
    todoDescripcion:"",
    todoEstado:"pendiente",
    todoCheck:false,
  }); 

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const {todoName, todoDescripcion} = todo

        if(!todoDescripcion.trim() || !todoName.trim()){
            setError(true);
            //  console.log("nooooooo está vacio")
            return
        }
        setError(false);
        console.log(todo);
        setTodo({
            todoName:"",
            todoDescripcion:"",
            todoEstado:"pendiente",
            todoCheck:false,
        });
    };

    const handleChange = (e) => {
        //e => setTodo({...todo,todoName: e.target.value})
        //console.log(e.target.value)
        //console.log(e.target.name)
        //console.log(e.target.type); 

        const { name, value, checked, type} = e.target

        setTodo((todo) => ({
            ...todo,
            [name]:
            type === "checkbox" 
            ? checked 
            : value,
        }));

        // setTodo((old) =>({
        //     ...todo,
        //     [e.target.name]:e.target.value,
        // }))
    };

    const PintarError = () =>(
            <div className="alert alert-danger">Campos obligatorios</div>

    )

  return (
    <>
        <h2>No controlado</h2>


        {
            error && <PintarError/> 
            //error ? <PintarError/> : null

        }

        <form onSubmit={handleSubmit}>
           <input
                className="form-control mb-2"
                 name="todoName"
                 placeholder="Ingrese Todo"
                 type="text"
                 defaultValue="Tarea #01"
                 onChange={handleChange}
                 value={todo.todoName}
            />
           <textarea
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion del todo"
                defaultValue="Descripcion #01"
                onChange={handleChange}
                value={todo.todoDescripcion}
            />
            <select
                name="todoEstado"
                className="form-control mb-2"
                defaultValue="pendiente"
                onChange={handleChange}
                value={todo.todoEstado}
                >
               <option
                   value="pendiente">Pendiente</option>
               <option
                    value="completado">Completada</option>
            </select>

            <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={todo.todoCheck}
                  onChange={handleChange}
                  name="todoCheck"
                  id="flexCheckDefault" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                            Dar Prioridad
                    </label>
            </div>

            <button
            type="submit"
            className="btn btn-primary">Agregar</button>
            
        </form>
    </>
  )
}

export default Formulario