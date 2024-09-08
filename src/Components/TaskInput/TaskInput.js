import React, { useState, useRef } from "react";

function TaskInput(props) {
  const [taskInput, setTaskInput] = useState();
  const inputRef = useRef();

  function taskInputHandler(e) {
    setTaskInput(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    if (taskInput) {
      setTaskInput("");
      inputRef.current.value = "";
      inputRef.current.focus();
      props.taskStateUp(taskInput);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex justify-center items-center py-10 gap-4">
      <input
        ref={inputRef}
        type="text"
        onChange={taskInputHandler}
        value={taskInput}
        className="px-5 py-3 shadow-xl shadow-slate-500 bg-white border w-2/5"
        placeholder="Enter you task..."
      />
      <button className="bg-teal-600 px-5 py-3 rounded-full text-white font-bold">Add Task</button>
    </form>
  );
}

export default TaskInput;
