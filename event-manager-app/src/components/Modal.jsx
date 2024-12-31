import ReactDOM from "react-dom";

import "../App.css";
export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
