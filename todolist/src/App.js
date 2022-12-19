import { Children, useCallback, useState } from "react";
import "./css/App.css";
import TodoList from "./data/todoList";
import Todo from "./data/todo";
import ListInput from "./comps/ListInput";
import ListViewer from "./comps/ListViewer";
import Modal from "./comps/Modal";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState(Todo);

  const [modalOn, setModalOn] = useState(false);

  const ListAdd = (todo, seq) => {
    setTodoList([...todoList, todo]);
    console.log(todoList);
  };

  const deleteList = (seq) => {
    setTodoList(todoList.filter((todo) => todo.seq !== seq));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>todoList</h1>
      </header>
      <ListInput todo={todo} setTodo={setTodo} ListAdd={ListAdd} />
      <ListViewer
        todoList={todoList}
        deleteList={deleteList}
        setModalOn={setModalOn}
        modalOn={modalOn}
      />
      <Modal show={modalOn} onHide={() => setModalOn(false)}></Modal>
    </div>
  );
}

export default App;
