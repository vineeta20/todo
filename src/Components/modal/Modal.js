import React, { useRef, useEffect, useState } from "react";
import "./Modal.css";

function Modal({ editHandler, setOpenModal, todo }) {
  const [input, setInput] = useState(todo);
  const ref = useRef();
  useEffect(() => {
    ref.current.click();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const saveHandler = () => {
    editHandler(todo, input);
    setOpenModal(false);
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {/* <div className="modal-header">
              
              
            </div> */}
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <input value={input} onChange={changeHandler} />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Close
              </button>
              <button
                onClick={saveHandler}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
