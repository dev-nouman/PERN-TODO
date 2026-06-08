import { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodos] = useState([])

    // Delete Func
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE",
            })

            setTodos(todos.filter(todo => todo.todo_id !== id))
            
        } catch (error) {
            console.error(error.message)
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();

            setTodos(jsonData)

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <>
            <table className="w-full max-w-4xl mx-auto mt-8 border-collapse border border-gray-300 text-center shadow-md">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">Edit</th>
                        <th className="border border-gray-300 px-4 py-2">Delete</th>
                    </tr>
                </thead>

                <tbody>

                    {/* 
                    <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">The Sliding</td>
                        <td className="border border-gray-300 px-4 py-2">Malcolm Lockyer</td>
                        <td className="border border-gray-300 px-4 py-2">1961</td>
                    </tr>
                    */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{todo.description}</td>
                            <td className="border border-gray-300 px-4 py-2"><EditTodo todo={todo} /></td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    onClick={() => deleteTodo(todo.todo_id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default ListTodos
