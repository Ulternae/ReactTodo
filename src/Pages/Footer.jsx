import { ButtonIcons } from "../Components/Button/ButtonIcons"
import btnCompleted from '../Assets/btnCompleted.svg'
import btnPending from '../Assets/btnPending.svg'
import btnAdd from '../Assets/btnAdd.svg'
import btnUser from '../Assets/btnUser.svg'
import btnHome from '../Assets/btnHome.svg'
import { ListenerAddTodo } from "../Listener/addTodo"
import React from "react"
const Footer = () => {
  React.useEffect(() => {
    console.log('Foooter')
  }, [])
  return (
  <div className="FooterContainer">
    <ButtonIcons icon={btnCompleted}/>
    <ButtonIcons icon={btnPending}/>
    <ButtonIcons icon={btnAdd} accion={(e) => ListenerAddTodo(e)}/>
    <ButtonIcons icon={btnUser}/>
    <ButtonIcons icon={btnHome}/>
  </div>)
}

export { Footer }