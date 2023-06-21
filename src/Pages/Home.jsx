import { useState } from "react";
import "../App.css";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

function Home() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 입문 강의 듣기",
      isDone: true,
    },
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 숙련 강의 듣기",
      isDone: false,
    },
    {
      id: 2,
      title: "점심 먹기",
      content: "점심 뭐먹지..?",
      isDone: false,
    },
  ]);

  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const setValue = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  return (
    <>
      <main>
        <TodoForm
          setValue={setValue}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          setTodo={setTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        <TodoList todos={todos} setTodos={setTodos} isDone={true} />
      </main>
    </>
  );
}

export default Home;
