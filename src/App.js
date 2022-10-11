import style from "./App.module.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import List from "./Components/ToDoLIST/List";
import AddTodo from "./Components/AddTodo/AddTodo";
import SearchBar from "./Components/Search/SearchBar";
let x = 3;
function App() {
  const [list, setList] = useState([
    { id: 1, todo: "TASK1" },
    { id: 2, todo: "TASK2" },
  ]);

  const [searchInput, setSearchInput] = useState("");

  const addHandler = (item) => {
    setList([...list, { id: x, todo: item }]);
    x++;
  };

  const deleteHandler = (item) => {
    setList((prev) => {
      return prev.filter((ele) => ele.todo !== item);
    });
  };

  const editHandler = (todo, newTodo) => {
    const indx = list.findIndex((ele) => ele.todo === todo);
    console.log(indx);
    setList((prev) => {
      const newList = [...prev];
      newList[indx].todo = newTodo;
      return newList;
    });
  };

  return (
    <div className={style.container}>
      <div>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <div className={style.wrapper}>
        <div>
          <Header />
        </div>
        <div>
          <AddTodo addHandler={addHandler} />
        </div>
        <div>
          {list.length === 0 ? (
            <p
              style={{
                color: "lightblue",
              }}
            >
              No to do task. Maybe ADD one!!
            </p>
          ) : (
            list
              .filter((item) =>
                item.todo
                  .toLocaleLowerCase()
                  .includes(searchInput.trim().toLocaleLowerCase())
              )
              .map((item, index) => (
                <List
                  key={item.id}
                  item={item}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
