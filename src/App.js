import React, { useState } from "react";
import TaskInput from "./Components/TaskInput/TaskInput";
import Header from "./Header/Header";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  let [taskList, updateTaskList] = useState([]);

  function taskStateUp(taskFromInputField) {
    updateTaskList([...taskList, taskFromInputField]);
  }

  function deleteTask(index) {
    let updatedList = taskList.filter((task, idx) => {
      return idx !== index;
    });
    updateTaskList(updatedList);
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 min-h-screen">
      <Header />
      <TaskInput taskStateUp={taskStateUp} />
      <TaskList taskList={taskList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
