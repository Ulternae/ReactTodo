import { ButtonPrimary } from "../../Components/Button/ButtonPrimary";
import { InfoPrimary } from "../../Components/Information/InfoPrimary";
import { useNavigate } from "react-router-dom";

const LoginUser = ({isNew, user }) => {
  const navigate = useNavigate()

  if (isNew) {
    return (
      <>
        <InfoPrimary text={"Task management & to do list"} />
        <ButtonPrimary
          text={"Let’s Start"}
          accion={() => navigate('/Todos/All')}
        />
      </>
    );
  }
  return (
    <InfoPrimary
      text={"Welcome"}
      user={user}
      label={"look yout tasks"}
      accion={() => navigate('/Todos/All')}
    />
  );
};
export { LoginUser };
