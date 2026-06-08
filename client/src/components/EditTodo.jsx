import { useState } from 'react';
import Modal from './Modal';

const EditTodo = ({ todo }) => {
  const [open, setOpen] = useState(false);

  const handleUpdate = async (todoId, description) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      if (response.ok) {
        window.location = "/";
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
      >
        Edit
      </button>
      <Modal open={open} setOpen={setOpen} todo={todo} onUpdate={handleUpdate} />
    </>
  );
};

export default EditTodo;
