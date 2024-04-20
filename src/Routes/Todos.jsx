import { TodosUser } from "../Logic/Todos/TodosUser"
import { FooterPage } from "../PagesGlobal/Footer"
import { NewUser } from "../Logic/Todos/NewUser"
import { useContext } from "react"
import { SectionContext } from "../Context/section"


const TodosPage = () => {
  const { hasTodos } = useContext(SectionContext)
  return (
    <>
      {!hasTodos && <NewUser/>}
      {hasTodos && <TodosUser/>}
      <FooterPage/>
    </>
  )
}

export { TodosPage }