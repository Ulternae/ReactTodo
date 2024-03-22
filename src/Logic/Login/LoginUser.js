import { ButtonPrimary } from "../../Components/Button/ButtonPrimary";
import { InfoPrimary } from "../../Components/Information/InfoPrimary";

const LoginUser = ({ setPage, isNew, user }) => {
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
