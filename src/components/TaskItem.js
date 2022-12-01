import { useContext } from "react";
import { FiEdit2, FiDelete } from "react-icons/fi";
import { deleteHandleContext, editHandleContext } from "../App";

const TaskItem = ({ task, handleEditSubmitter, editedText, setEditedText }) => {
  const handleDelete = useContext(deleteHandleContext);

  const handleEdit = useContext(editHandleContext);

  return (
    <div className="task-item flex justify-between items-center mb-3 bg-gray-800 p-3 rounded group hover:bg-gradient-to-r hover:from-teal-700 hover:to-teal-900 duration-300">
      <div className="task-item-left flex gap-3 items-center">
        <input type="checkbox" className="accent-teal-400" />
        {task.isEditable && (
          <form onSubmit={(e) => handleEditSubmitter(e, task.id)}>
            <input
              className="bg-transparent border-b-2 pb-1 outline-none focus:border-teal-700 border-gray-400"
              type="text"
              required
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}
        {!task.isEditable && (
          <p className="group-hover: text-teal-500">{task.text}</p>
        )}
      </div>
      <div className="task-item-right flex gap-3">
        <button onClick={() => handleEdit(task.id)}>
          <FiEdit2 className="text-gray-500 hover:text-teal-500 duration-300" />
        </button>
        <button onClick={() => handleDelete(task.id)}>
          <FiDelete className="text-gray-500 hover:text-red-500 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
