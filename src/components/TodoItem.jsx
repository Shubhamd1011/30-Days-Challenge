function TodoItem({ text, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white px-4 py-2 rounded shadow">
      <span className="text-gray-800">{text}</span>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
