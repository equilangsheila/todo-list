import Task from "./Task";

function TaskList (){
    const taskItemsList = [
        "Follow me on Facebook",
        "Follow me on Instagram",
        "Follow me on Twitter"
    ];
    return (
        <div>
            <input className="task-input"/>
                <ul>
                  {taskItemsList.map ((task, index) => {
                  return <Task key={index} taskName={task}/>
            })}
              </ul>
        </div>
    );
}


export default TaskList;