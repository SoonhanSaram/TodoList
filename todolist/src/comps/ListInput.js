import "../css/input.css";
const ListInput = (props) => {
  const { todo, setTodo, ListAdd } = props;

  const todoAdd = (e) => {
    const key = e.key;
    const value = e.target.value;
    const input = document.createElement("INPUT");
    input.value = "";
    input.value = Math.random();
    input.style.display = "none";
    document.querySelector(".Input").appendChild(input);
    const seq = input.value;
    setTodo({ ...todo, seq: seq, title: value });
    console.log(todo);
  };

  const EnterHandler = (e) => {
    const key = e.key;

    console.log(key);
    if (key == "Enter") {
      ListAdd(todo);
    }
  };
  return (
    <div className="Input">
      <input
        onChange={todoAdd}
        onKeyDown={EnterHandler}
        value={todo.title}
        className="todolistinput"
        placeholder="할 일을 입력해주세요"
      ></input>
    </div>
  );
};

export default ListInput;
