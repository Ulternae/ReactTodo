import { TitleSecondary } from "../Components/Title/TitleSecondary";
import { ButtonIcons } from "../Components/Button/ButtonIcons";
import iconClose from "../Assets/iconClose.svg";
import { useContext } from "react";
import { SectionContext } from "../Context/section";
import { ButtonPrimary } from "../Components/Button/ButtonPrimary";
import { ListenerAddTodo } from "../Listener/addTodo";

const AddTodos = () => {
  const { setOpenModal, setTodos, setHasTodos } = useContext(SectionContext);

  const TextArea = () => document.querySelector(".AddTodos_textArea");

  return (
    <div className="modalContainer">
      <div className="AddTodos_container">
      <div>
        <TitleSecondary text={"Add Todos"} />
        <textarea
          className="AddTodos_textArea"
          placeholder="Create a new Todo"
        />
      </div>
      <ButtonPrimary
        text={"Confirm"}
        accion={() => {
          ListenerAddTodo(TextArea().value, crypto.randomUUID(), setTodos);
          setOpenModal(false);
          setHasTodos(true)
        }}
      />
      <ButtonIcons
        className="AddTodos_close"
        accion={() => setOpenModal(false)}
        icon={iconClose}
      />
    </div>
    </div>

  );
};
export { AddTodos };
