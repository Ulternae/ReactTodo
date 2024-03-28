import { useContext } from "react";
import { ButtonPrimary } from "../../Components/Button/ButtonPrimary";
import { InfoPrimary } from "../../Components/Information/InfoPrimary";
import { SectionContext } from "../../Context/section";

const LoginUser = ({isNew, user }) => {
  const { setPage } = useContext(SectionContext);

  if (isNew) {
    return (
      <>
        <InfoPrimary text={"Task management & to do list"} />
        <ButtonPrimary
          text={"Let’s Start"}
          accion={() => setPage("HOME")}
        ></ButtonPrimary>
      </>
    );
  }
  return (
    <InfoPrimary
      text={"Welcome"}
      user={user}
      label={"look yout tasks"}
      accion={() => setPage("HOME")}
    />
  );
};
export { LoginUser };
