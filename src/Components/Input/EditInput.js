import { TitleSecondary } from "../Title/TitleSecondary"

const EditInput = ({ accion, value, placeholder, text, type }) => {

  return (
    <div>
      <TitleSecondary text={text}/>
      <input
        onChange={accion}
        value={value}
        placeholder={placeholder}>
      </input>
    </div>
  )
}

export { EditInput }