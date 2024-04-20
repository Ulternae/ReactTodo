import { ButtonIcons } from "../Components/Button/ButtonIcons";
import btnCompleted from "../Assets/btnCompleted.svg";
import btnPending from "../Assets/btnPending.svg";
import btnAdd from "../Assets/btnAdd.svg";
import btnUser from "../Assets/btnUser.svg";
import btnHome from "../Assets/btnHome.svg";
import React, { useContext, useState } from "react";
import { SectionContext } from "../Context/section";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { AddTodoModal } from "../Modal/AddTodo";

const FooterPage = () => {
  const navigate = useNavigate();
  const { setTodos, setHasTodos } = useContext(SectionContext);
  const [todoPortal, setTodoPortal] = useState(false);

  return (
    <>
      <div className="FooterContainer">
        <ButtonIcons
          icon={btnCompleted}
          accion={() => navigate("/Todos/Completed")}
        />
        <ButtonIcons
          icon={btnPending}
          accion={() => navigate("/Todos/Pending")}
        />
        <ButtonIcons icon={btnAdd} accion={() => setTodoPortal(true)} />
        <ButtonIcons icon={btnUser} accion={() => navigate("/Login")} />
        <ButtonIcons icon={btnHome} accion={() => navigate("/Todos/All")} />
      </div>

      {todoPortal &&
        createPortal(
          <AddTodoModal
            setTodos={setTodos}
            setHasTodos={setHasTodos}
            setOpenModal={setTodoPortal}
          />,
          document.body
        )}
    </>
  );
};

export { FooterPage };
