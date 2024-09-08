import React, { useState } from "react";
import TaskInput from "./Components/TaskInput/TaskInput";
import Header from "./Header/Header";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  let [taskList, updateTaskList] = useState([]);

  const [task, setTask] = useState("");

  function taskStateUp(taskFromInputField) {
    setTask(taskFromInputField);
    updateTaskList([...taskList, taskFromInputField]);
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 min-h-screen">
      <Header />
      <TaskInput task={task} taskStateUp={taskStateUp} />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;
