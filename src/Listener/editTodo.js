import { updateTodos } from "../Global/storage";

const editTodo = (id, e, todos, setTodos) => {
  const editTodo = todos.map((value) => {
    if (value.id === id) {
      if (!value.oldText) {
        value.oldText = value.text;
      }
      value.text = e.target.value;
      if (e.target.value === "") {
        value.text = value.oldText;
      }
      return value;
    }
    return value;
  }); 
  updateTodos(editTodo, setTodos);
};

export { editTodo };
