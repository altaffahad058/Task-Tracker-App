import React, { useState } from "react";
import TaskInput from "./Components/TaskInput/TaskInput";
import Header from "./Header/Header";

function App() {
  let [taskList, updateTaskList] = useState([]);

  const [task, setTask] = useState("");

  function taskStateUp(taskFromInputField) {
    setTask(taskFromInputField);
    console.log(taskFromInputField)
    updateTaskList([...taskList, taskFromInputField]);
  }

  return (
    <div>
      <Header />
      <TaskInput task={task} taskStateUp={taskStateUp} />
    </div>
  );
}

export default App;
