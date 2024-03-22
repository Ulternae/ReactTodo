import { useState } from "react"
import { ButtonPrimary } from "../../Components/Button/ButtonPrimary"
import { SelectIcons } from "../../Components/Content/SelectIcons"
import { EditInput } from "../../Components/Input/EditInput"
import { TitleSecondary } from "../../Components/Title/TitleSecondary"
import { imagesIcons } from "../../Global/images"
import { Warning } from "../../Components/Information/Warning"
import { warningInputs } from "../../Listener/warningInputs"

const dataCreateAccount = [
  { text: 'Full Name', placeholder: "Enter your full name" },
  { text: 'Nickname', placeholder: "What's your nickname" },
  { text: 'Password', placeholder: "*********" },
  { text: 'Language', placeholder: "English?" },
]

const AccountCreate = () => {
  const [image, setImage] = useState(imagesIcons[parseInt(Math.random() * imagesIcons.length)])
  const [warning, setWarning] = useState(false)

  return (
    <>
      <TitleSecondary text={'Create Account'} />
      <SelectIcons img={image} isSelect={true}/>
      <section className="AccountCreate_Section">
        {dataCreateAccount.map((data, index) => {
          return <EditInput text={data.text} key={index} placeholder={data.placeholder}/>
        })}
      </section>

      <ButtonPrimary
        text={'Create Account'}
        accion = {() => warningInputs('.AccountCreate_Section div input', setWarning, image)}
      />

      { warning && <Warning text={'The information is no completed'}/>}
    </>
  )
}

export { AccountCreate }