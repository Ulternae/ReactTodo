import { ButtonIcons } from "../../Components/Button/ButtonIcons"
import { ItemsContainer } from "../../Components/Items/ItemsContainer"
import { TitlePrimary } from "../../Components/Title/TitlePrimary"
import { TitleSecondary } from "../../Components/Title/TitleSecondary"
import btnAddComplete from '../../Assets/btnAddComplete.svg'
import { ListenerAddTodo } from "../../Listener/addTodo"

const NewUser = () => {
  return <div className="Container">
    <TitlePrimary>Create Todo</TitlePrimary>

    <ItemsContainer>
      <section className="NewUser_content">
        <TitleSecondary text={"Welcome user you no have a todos,  you can create one Try!"} />
        <ButtonIcons icon={btnAddComplete} accion={(e) => ListenerAddTodo(e)} />
      </section>
    </ItemsContainer>
  </div>
}

export { NewUser }