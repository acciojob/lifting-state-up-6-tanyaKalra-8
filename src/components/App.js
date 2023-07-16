import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
    // { id: 4, text: "Learn React", completed: false },
    // { id: 5, text: "Build a project", completed: false },
    // { id: 6, text: "Deploy to production", completed: false },
    // { id: 7, text: "Learn React", completed: false },
    // { id: 8, text: "Build a project", completed: false },
    // { id: 9, text: "Deploy to production", completed: false },
  ]);

  const handleComplete = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <div className="parent">
        <h1>Parent Component</h1>
        <div className="child">
          <h2>Child Component</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text} &nbsp;
                {!todo.completed && (
                  <button type="button" onClick={() => handleComplete(todo.id)}>
                    Complete
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
