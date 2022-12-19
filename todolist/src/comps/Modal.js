import { Children } from "react";

const Modal = () => {
  return (
    <div>
      <header>
        <h3>내용 수정하기</h3>
        <button>&times;</button>
      </header>
      <div>{Children}</div>
      <footer>
        <button>닫기</button>
      </footer>
    </div>
  );
};

export default Modal;
