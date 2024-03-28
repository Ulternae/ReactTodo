import { ButtonIcons } from "../Components/Button/ButtonIcons"
import btnCompleted from '../Assets/btnCompleted.svg'
import btnPending from '../Assets/btnPending.svg'
import btnAdd from '../Assets/btnAdd.svg'
import btnUser from '../Assets/btnUser.svg'
import btnHome from '../Assets/btnHome.svg'
import React, { useContext } from "react"
import { SectionContext } from "../Context/section"

const Footer = () => {
  const { setPage, setOpenModal } = useContext(SectionContext)

  return (
  <div className="FooterContainer">
    <ButtonIcons icon={btnCompleted} accion={() => setPage('COMPLETED')}/>
    <ButtonIcons icon={btnPending} accion={() => setPage('PENDING')}/>
    <ButtonIcons icon={btnAdd} accion={() => setOpenModal(true)}/>
    <ButtonIcons icon={btnUser} accion={() => setPage('ACCOUNT')}/>
    <ButtonIcons icon={btnHome} accion={() => setPage('HOME')}/>
  </div>)
}

export { Footer }