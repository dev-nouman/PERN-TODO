import { useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/"
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <h1 className="text-center mt-5 text-3xl font-bold">
                PERN Todo
            </h1>

            <form className="flex justify-center mt-6 gap-2" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Enter a todo..."
                    className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Add
                </button>
            </form>
        </>
    );
};

export default InputTodo;