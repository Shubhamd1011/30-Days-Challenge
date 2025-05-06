import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // State to manage todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  // Function to delete a todo by index
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-green-200 border border-gray-300 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">TODO App</h1>

        {/* Todo Input Component */}
        <TodoInput onAdd={addTodo} />

        {/* Todo List Component */}
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
