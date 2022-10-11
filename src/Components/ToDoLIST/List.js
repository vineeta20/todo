import React, { useState } from "react";
import style from "./List.module.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "../modal/Modal";

const List = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked((prev) => !prev);
  };
  const classTodo = clicked ? style.clicked : style.todo_task1;
  return (
    <>
      <div className={style.list}>
        <div className={style.tasks}>
          <div className={classTodo} onClick={clickHandler}>
            {props.item.todo}
          </div>
          <div className={style.icons}>
            <div className={style.icon}>
              <FaEdit
                className="mx-1"
                onClick={() => {
                  setModalOpen(true);
                }}
              />
            </div>
            <div className={style.icon}>
              <MdDelete
                className="mx-1"
                onClick={props.deleteHandler.bind(null, props.item.todo)}
              />
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal
          todo={props.item.todo}
          editHandler={props.editHandler}
          setOpenModal={setModalOpen}
        />
      )}
    </>
  );
};

export default List;
