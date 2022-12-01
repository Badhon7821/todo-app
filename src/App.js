import React, { createContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

export const deleteHandleContext = createContext();
export const editHandleContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editedText, setEditedText] = useState("");
  const [toggleEditMode, setToggleEditMode] = useState(true);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    try {
      const res = await fetch(
        "https://alkaline-capable-captain.glitch.me/tasks"
      );

      if (!res.ok) throw new Error("something went wrong");
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = (id) => {
    deleteTask(id);

    setTasks(tasks.filter((task) => id !== task.id));
  };

  const deleteTask = async (id) => {
    await fetch(`https://alkaline-capable-captain.glitch.me/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const handleEdit = (id) => {
    // set target
    const [editableTarget] = tasks.filter((task) => id === task.id);

    editableTarget.isEditable = true;
    setEditedText(editableTarget.text);
    setTasks([...tasks]);
    setToggleEditMode(false);

    //rearrange
    tasks
      .filter((task) => task.id !== id)
      .map((target) => (target.isEditable = false));
  };

  const handleEditSubmitter = (e, id) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <deleteHandleContext.Provider value={handleDelete}>
        <editHandleContext.Provider value={handleEdit}>
          <Header />
          <AddTask tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            error={error}
            loading={loading}
            handleEditSubmitter={handleEditSubmitter}
            editedText={editedText}
            setEditedText={setEditedText}
          />
          <Footer />
        </editHandleContext.Provider>
      </deleteHandleContext.Provider>
    </div>
  );
};

export default App;
