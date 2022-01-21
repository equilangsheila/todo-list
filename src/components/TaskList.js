import Task from "./Task";
import {useState} from "react";

function TaskList (){
    const [ taskItemsList, setTaskItemsList ] = useState ([
        "Follow me on Facebook",
        "Follow me on Instagram",
        "Follow me on Twitter"
    ]);

    const [taskValue, setTaskValue] = useState("");
    console.log(taskValue);

    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value)
    };

    const addTaskHandler = (e) => {
        setTaskItemsList([taskValue, ...taskItemsList]);
      };
    
    return (
        <div>
    <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
        onBlur={addTaskHandler}
        value={taskValue}
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