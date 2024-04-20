import iconClose from "../Assets/iconClose.svg";
import { TitleSecondary } from "../Components/Title/TitleSecondary";
import { ButtonIcons } from "../Components/Button/ButtonIcons";
import { ButtonPrimary } from "../Components/Button/ButtonPrimary";
import { ListenerAddTodo } from "../Listener/addTodo";
import { editUserData } from "../Global/storage";

const AddTodoModal = ({ setTodos, setHasTodos, setOpenModal }) => {
  const TextArea = () => document.querySelector(".AddTodos_textArea");

  return (
    <div className="modalBackground">
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
              setHasTodos(true);
              editUserData('hasTodos', true)
            }}
          />
          <ButtonIcons
            className="AddTodos_close"
            accion={() => setOpenModal(false)}
            icon={iconClose}
          />
        </div>
      </div>
    </div>
  );
};
export { AddTodoModal };
