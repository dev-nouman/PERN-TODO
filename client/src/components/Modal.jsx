import { useState, useEffect } from "react";

const Modal = ({ open, setOpen, todo, onUpdate }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (todo) {
      setDescription(todo.description);
    }
  }, [todo]);

  if (!open) return null;

  const handleUpdate = () => {
    onUpdate(todo.todo_id, description);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      
      <div className="bg-white w-96 rounded-lg shadow-lg p-5">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Edit Todo</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Input */}
        <div className="py-4">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 border-t pt-3">
          
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
          >
            Close
          </button>

          <button
            onClick={handleUpdate}
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Edit
          </button>

        </div>

      </div>
    </div>
  );
};

export default Modal;