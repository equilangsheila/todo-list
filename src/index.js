import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


// My first component

function Task (props){
    console.log(props);
    return (
                  <li className="tasks-item">{props.taskName}</li>
    );
}


function TaskList (){
    return (
        <ul>
            <Task taskName="Follow me on Facebook"/>
            <Task taskName="Follow me on Instagram"/>
            <Task taskName="Follow me on Twitter"/>
              </ul>
    )
}

function App() {
    const paraStyle = {
        "marginBottom": "15px"
    };

  return (
      <div className="app">
          <header className="app-header">
              <h1>
                  My Amazing ToDo-List App
              </h1>
              <p style={paraStyle}>The most simple and amazing todo-list React app.</p>
        <TaskList/>
          </header>
      </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));