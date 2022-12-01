import React, { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const inputRef = useRef(null);
  const addTaskHandler = (e) => {
    e.preventDefault();

    taskPosting(task);
    inputRef.current.blur();
    setTask("");
  };

  const taskPosting = async (text) => {
    const res = await fetch(
      "https://alkaline-capable-captain.glitch.me/tasks",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );

    const data = await res.json();
    // real time data update
    setTasks([...tasks, data]);
  };

  return (
    <form
      className="bg-gray-900 container mx-auto flex justify-between p-10"
      onSubmit={addTaskHandler}
    >
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        type="text"
        className="bg-transparent outline-none border-b-2 py-2 px-5 focus:border-teal-600"
        placeholder="What to do?"
      />
      <button
        type="submit"
        className="bg-teal-900/30 px-5 border-2 border-teal-600 rounded text-teal-500 hover:bg-teal-500 hover:text-gray-700 duration-300"
      >
        Add task
      </button>
    </form>
  );
};

export default AddTask;
