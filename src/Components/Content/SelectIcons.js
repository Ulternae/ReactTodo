import iconSelect from '../../Assets/iconSelect.svg'
const SelectIcons = ({ img, isSelect, setPortalIcons }) => {

  return (
    <div className='SelectIcons_Container'>
      <img className="SelectIcons_Icon" src={img} alt="" />
      {isSelect &&
        <div className="SelectIcons_Types">
          <img
            src={iconSelect}
            alt="Select icons types"
            onClick={() => setPortalIcons(true)}
          />
        </div>
      }
    </div>)
} 

export { SelectIcons }