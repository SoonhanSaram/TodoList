import "../css/list.css";
const ListViewer = (props) => {
  const { todoList, deleteList } = props;

  const todoListView = todoList.map((todo) => {
    return (
      <tr className="todoTR" data-seq={todo.seq}>
        <td className="delete">&times;</td>
        <td className="title">{todo.title}</td>
        <td className="modify">수정</td>
      </tr>
    );
  });

  const click = () => {
    const tbody = document.querySelector(".tbody");
    tbody?.addEventListener("click", (e) => {
      const modify = document.querySelector(".modify");
      const target = e.target;
      const seq = target.closest("TR").dataset.seq;
      if (target.tagName === "TD") {
        if (target.className == "modify") {
          alert("수정하시겠습니까?");
        } else if (target.className == "delete") {
          deleteList(seq);
        } else if (target.className == "title") {
          target.closest("TR").style.textDecoration = "line-through";
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
