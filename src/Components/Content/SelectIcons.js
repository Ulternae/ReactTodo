import iconSelect from '../../Assets/iconSelect.svg'
const SelectIcons = ({img , isSelect}) => {
  return (
  <div className='SelectIcons_Container'>
    <img className="SelectIcons_Icon" src={img} alt="Image of user"/>
    { isSelect && 
      <div className="SelectIcons_Types">
        <img 
          src={iconSelect} 
          alt="Select icons types"
          onClick={() => console.log('Popover icons')}
        />
      </div>
    }
  </div>)
}

export { SelectIcons }