import { ButtonIcons } from "../../Components/Button/ButtonIcons";
import { ItemsContainer } from "../../Components/Items/ItemsContainer";
import { TitlePrimary } from "../../Components/Title/TitlePrimary";
import { TitleSecondary } from "../../Components/Title/TitleSecondary";
import btnAddComplete from "../../Assets/btnAddComplete.svg";
import { useContext, useState } from "react";
import { getUser } from "../../Global/storage";
import { createPortal } from "react-dom";
import { AddTodoModal } from "../../Modal/AddTodo";
import { SectionContext } from "../../Context/section";

const NewUser = () => {
  const [todoPortal, setTodoPortal] = useState(false);
  const nameUser = !!getUser().nickName ? getUser().nickName : "user";
  const { setTodos, setHasTodos } = useContext(SectionContext)

  return (
    <>
      <div className="Container">
        <TitlePrimary>Create Todo</TitlePrimary>

        <ItemsContainer>
          <section className="NewUser_content">
            <TitleSecondary
              text={`Welcome ${nameUser} you no have a todos, you can create one Try!`}
            />
            <ButtonIcons
              icon={btnAddComplete}
              accion={() => setTodoPortal(true)}
            />
            {todoPortal && createPortal
              ( <AddTodoModal  
                setTodos={setTodos}
                setHasTodos={setHasTodos}
                setOpenModal={setTodoPortal}
              />,
            document.body)}
          </section>
        </ItemsContainer>
      </div>
    </>
  );
};

export { NewUser };
