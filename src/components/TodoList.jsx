import "./TodoList.css";

const TodoList = ({ item, deleteHandler, doneHandler }) => {
  return (
    <div key={item.id} className="todos">
      <div className="todosTxt">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
      <div className="todosBtn">
        <button onClick={() => deleteHandler(item.id)}>×</button>
        <button onClick={() => doneHandler(item.id)}>
          {item.isDone ? "↺" : "✓"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
