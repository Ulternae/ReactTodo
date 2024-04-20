import React, { useContext } from "react";
import iconDelete from "../../Assets/iconDelete.svg";
import iconComplete from "../../Assets/iconComplete.svg";
import { stateTodo } from "../../Listener/stateTodo";
import { SectionContext } from "../../Context/section";
const Item = ({
  text,
  completed,
  accionChange,
  accionDelete,
  accionEdit,
  accionToggle,
}) => {
  const { todos, setTodos } = useContext(SectionContext);
  return (
    <div className={`ItemComplete ItemComplete_${completed}`}>
      <img
        className="ItemIconComplete"
        src={iconComplete}
        alt="Icon complete"
        onClick={accionChange}
      />
      <section
        onDoubleClick={(e) => {
          accionToggle(e);
          clearTodos(todos, setTodos);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            stateTodo(e);
            clearTodos(todos, setTodos);
          }
        }}
        onBlur={(e) => {
          stateTodo(e);
          clearTodos(todos, setTodos);
        }}
      >
        <label>{text}</label>
        <input
          className="hidden"
          placeholder={text}
          value={text}
          onChange={accionEdit}
        />
      </section>
      <img
        className="ItemIconDelete"
        src={iconDelete}
        alt="Icon delete"
        onClick={accionDelete}
      />
    </div>
  );
};

const clearTodos = (todos, setTodos) => {
  const newData = todos.map(({ completed, id, text }) => ({
    completed: completed,
    id: id,
    text: text,
  }));
  setTodos(newData);
  localStorage.setItem("todos", JSON.stringify(newData));
};

export { Item };
