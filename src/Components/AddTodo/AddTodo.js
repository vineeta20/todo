import React, { useState, useRef } from "react";
import style from "./AddTodo.module.css";

let isInvaild = true;
const AddTodo = (props) => {
  const ref = useRef();
  const [input, setInput] = useState("");
  // const [isInvaild, setIsInvalid] = useState(true);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = () => {
    props.addHandler(input);
    setInput("");
    ref.current.focus();
  };
  if (input.length > 0) {
    isInvaild = false;
  } else if (input.length === 0) {
    isInvaild = true;
  }
  return (
    <div className={style.form}>
      <input
        ref={ref}
        onChange={changeHandler}
        className={style.input}
        type="text"
        autoFocus
        value={input}
        placeholder="Enter your task"
      />
      <button
        disabled={isInvaild}
        onClick={clickHandler}
        style={style.buttons}
        type="button"
      >
        {" "}
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
