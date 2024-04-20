import iconBack from '../../Assets/iconBack.svg'
import { useContext, useState } from "react"
import { ButtonPrimary } from "../../Components/Button/ButtonPrimary"
import { SelectIcons } from "../../Components/Content/SelectIcons"
import { EditInput } from "../../Components/Input/EditInput"
import { TitleSecondary } from "../../Components/Title/TitleSecondary"
import { Warning } from "../../Components/Information/Warning"
import { warningInputs } from "../../Listener/warningInputs"
import { IconsContext } from "../../Context/icons"
import { ButtonIcons } from "../../Components/Button/ButtonIcons"
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { SelectIconsModal } from '../../Modal/SelectIcons.jsx'

const dataCreateAccount = [
  { text: 'Full Name', placeholder: "Enter your full name" },
  { text: 'Nickname', placeholder: "What's your nickname" },
  { text: 'Password', placeholder: "*********" },
  { text: 'Language', placeholder: "English?" },
]

const AccountCreate = () => {
  const navigate = useNavigate()
  const { iconSelect, setNewUser, setIconSelect} = useContext(IconsContext)
  const [warning, setWarning] = useState(false)
  const  [portalIcons, setPortalIcons] = useState(false)
  const successCreateAccount = () => {
    const success = warningInputs('.AccountCreate_Section div input', setWarning, iconSelect)
    if (success) setNewUser(false)
  }
  return (
    <>
      <ButtonIcons 
        icon={iconBack} 
        accion={() => navigate('/Todos/All')}
        className = {'AccountCreate_Back'}
      />
      <TitleSecondary text={'Create Account'} />
      <SelectIcons img={iconSelect} isSelect={true} setPortalIcons={setPortalIcons}/>
      
      <section className="AccountCreate_Section">
        {dataCreateAccount.map((data, index) => {
          return <EditInput text={data.text} key={index} placeholder={data.placeholder}/>
        })}
      </section>

      <ButtonPrimary
        text={'Create Account'}
        accion = {() => successCreateAccount()}
      />

      { warning && <Warning text={'The information is no completed'}/>}
    
      { portalIcons && 
        createPortal(
          <SelectIconsModal
            setOpenIcons={setPortalIcons}
            iconSelect={iconSelect}
            setIconSelect={setIconSelect}
          />, document.body
        )
      }
    </>
  )
}

export { AccountCreate }