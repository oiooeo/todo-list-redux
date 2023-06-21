import "../App.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Home() {
  return (
    <>
      <main>
        <TodoForm />
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </main>
    </>
  );
}

export default Home;
