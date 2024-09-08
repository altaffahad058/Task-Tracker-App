import React from "react";
import TaskDetails from "./TaskDetails";

function TaskList(props) {
  let list = props.taskList;
  return (
    <ul className="list-decimal font-serif gap-10 py-10 list-inside flex flex-col items-center">
      {list && list.length > 0 ? (list.map((task, index) => {
          return  <TaskDetails key={index} index={index} task={task} deleteTask={props.deleteTask} /> }
          )) : 
        (<span className="text-2xl font-extrabold bg-white bg-opacity-30 font-mono">Please Add a Task</span>)
      }
    </ul>
  );
}

export default TaskList;
