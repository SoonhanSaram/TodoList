import "../css/list.css";
const ListViewer = (props) => {
  const { todoList, deleteList, setModalOn } = props;

  const todoListView = todoList.map((todo) => {
    return (
      <tr className="todoTR" data-seq={todo.seq}>
        <td className="delete">&times;</td>
        <td className="check">✔</td>
        <td className="title">{todo.title}</td>
        <td className="modify">수정</td>
      </tr>
    );
  });

  const click = () => {
    const tbody = document.querySelector(".tbody");
    tbody?.addEventListener("click", (e) => {
      const modify = document.querySelector(".modify");
      const check = document.querySelector(".check");
      const title = document.querySelector(".title");
      const target = e.target;
      const tr = target.closest("TR");
      const del = document.querySelector(".delete");
      const seq = target.closest("TR").dataset.seq;
      if (target.tagName === "TD") {
        if (target.className == "modify") {
          setModalOn(true);
        } else if (target.className == "delete") {
          deleteList(seq);
        } else if (target.className == "title") {
          title.classList.toggle("through");
          modify.classList.toggle("display");
          del.classList.toggle("display");
          check.classList.toggle("display");
        } else if (target.className == "title through") {
          title.classList.toggle("through");
          modify.classList.toggle("display");
          del.classList.toggle("display");
          check.classList.toggle("display");
        }
      }
    });
  };
  return (
    <>
      <table className="List">
        <thead>
          <tr>
            <th>오늘 할 일</th>
          </tr>
        </thead>
        <tbody className="tbody" onClick={click}>
          {todoListView}
        </tbody>
      </table>
    </>
  );
};

export default ListViewer;
