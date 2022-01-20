import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


// My first component
function TaskList (){
    return (
        <ul>
                  <li className="tasks-item">Follow me on Facebook</li>
                  <li className="tasks-item">Follow me on Instagram</li>
                  <li className="tasks-item">Follow me on Twitter</li>
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