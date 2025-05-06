import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      {todos.length === 0 ? (
        <p className="text-black text-center">No tasks yet.</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => onDelete(index)}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
