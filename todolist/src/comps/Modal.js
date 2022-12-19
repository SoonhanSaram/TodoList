import "../css/modal.css";
const Modal = (Children, show, onHide) => {
  return (
    <div className={show ? "Modal open" : "Modal"}>
      <div>
        <header>
          <h3>내용 수정하기</h3>
          <button onClick={onHide}>&times;</button>
        </header>
        <div></div>
        <footer>
          <button onClick={onHide}>닫기</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
