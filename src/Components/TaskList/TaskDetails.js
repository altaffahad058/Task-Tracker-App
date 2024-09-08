import React from 'react'

function TaskDetails(props) {
    return (
        <div className="flex justify-between px-10 py-3 shadow-xl shadow-slate-500 bg-white border w-2/5 ">
          <li className="">{props.task}</li>
            <button onClick={() => props.deleteTask(props.index)} className="bg-red-600 text-white font-mono px-2 rounded-full text-xs">
              Delete
            </button>
        </div>
      )
}

export default TaskDetails
