import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  //추가하기 버튼 클릭
  const onSubmitHandler = (e) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      body: content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  //삭제하기 버튼 클릭
  const deleteHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  //완료하기 버튼 클릭
  const doneHandler = (id) => {
    const newDoneTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newDoneTodo);
  };

  return (
    <>
      <main>
        <header>
          <h1>MY TODO LIST</h1>
        </header>

        <section className="input-section">
          <Input
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
            title={title}
            content={content}
          />
        </section>

        <section className="working-section">
          <h2>My plan</h2>
          <div className="todoList">
            {todos
              .filter((todo) => !todo.isDone)
              .map(function (item) {
                return (
                  <TodoList
                    key={item.id}
                    item={item}
                    deleteHandler={deleteHandler}
                    doneHandler={doneHandler}
                  />
                );
              })}
          </div>
        </section>

        <section className="done-section">
          <h2>Done</h2>
          {todos
            .filter((todo) => todo.isDone)
            .map(function (item) {
              return (
                <TodoList
                  key={item.id}
                  item={item}
                  deleteHandler={deleteHandler}
                  doneHandler={doneHandler}
                />
              );
            })}
        </section>
      </main>
    </>
  );
}

//header

export default App;
