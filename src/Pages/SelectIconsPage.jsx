import { useContext } from "react";
import { ButtonPrimary } from "../Components/Button/ButtonPrimary";
import { imagesIcons } from "../Global/images";
import { IconsContext } from "../Context/icons";
import { SectionContext } from "../Context/section";

const SelectIconsPage = () => {
  const { setOpenIcons } = useContext(SectionContext)
  const { iconSelect , setIconSelect } = useContext(IconsContext)
  
  const icons = imagesIcons;
  const renderIcons = () => {
    return icons.map((value) => (
      <div key={value}>
        <img
          src={value}
          alt="Icon of user select"
          value={value}
          onClick={() => setIconSelect(value)}
        />
      </div>
    ));
  };
  return (
    <>
      <div className="SelectIconsLayout">
        <div className="SelectIconsLayout_Container">
          {renderIcons()}
          <section className="SelectIconsLayout_Major">
            <img src={iconSelect} alt="" />
          </section>
        </div>

        <ButtonPrimary text={"Confirm"} accion={() => {
          setOpenIcons(false)
        }} />
      </div>
    </>
  );
};

export { SelectIconsPage };
