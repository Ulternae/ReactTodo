const ButtonIcons = ({ accion, icon}) => {
  return (
    <button className="ButtonIcons" onClick={accion}>
      <img src={icon} alt="button dinamic icon"></img>
    </button>
    )
}

export { ButtonIcons }