import Task from "./Task";
import {useState} from "react";

function TaskList (){
    const taskItemsList = [
        "Follow me on Facebook",
        "Follow me on Instagram",
        "Follow me on Twitter"
    ];

    const [taskValue, setTaskValue] = useState("Just another task");
    console.log(taskValue);

    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value)
    };
    
    return (
        <div>
          <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
      />

             {/* <input className="task-input" placeholder="Create a new task"/> */}
                <ul>
                  {taskItemsList.map ((task, index) => {
                  return <Task key={index} taskName={task}/>
            })}
              </ul>
              </div>
    );
}


export default TaskList;