import "../css/modal.css";
const Modal = ({
  children,
  show,
  onHide,
  todoSeq,
  ListUpdate,
  todo,
  setTodo,
}) => {
  const modifingTodoy = (e) => {
    const value = e.target.value;
    console.log(e.key);
    if (e.key == "Enter") {
      const seq = todoSeq;
      ListUpdate(value, seq);
    }
  };

  const changeTitle = (e) => {
    const value = e.target.value;
    setTodo({ ...todo, seq: todoSeq, title: value });
  };

  return (
    <div className={show ? "Modal open" : "Modal"}>
      <div>
        <header>
          <h3>내용 수정하기</h3>
          <button onClick={onHide}>&times;</button>
        </header>
        <from>
          <input
            onChange={changeTitle}
            onKeyDown={modifingTodoy}
            value={children}
          ></input>
        </from>
        <footer>
          <button onClick={onHide}>닫기</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
