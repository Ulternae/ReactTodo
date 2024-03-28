import { useContext } from 'react'
import iconSelect from '../../Assets/iconSelect.svg'
import { SectionContext } from '../../Context/section'
const SelectIcons = ({ img, isSelect }) => {

  const { setOpenIcons } = useContext(SectionContext)

  return (
    <div className='SelectIcons_Container'>
      <img className="SelectIcons_Icon" src={img} alt="" />
      {isSelect &&
        <div className="SelectIcons_Types">
          <img
            src={iconSelect}
            alt="Select icons types"
            onClick={() => setOpenIcons(true)}
          />
        </div>
      }
    </div>)
}

export { SelectIcons }