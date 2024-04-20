import { useContext } from "react";
import { AccountCreate } from "../Logic/Account/AccountCreate";
import { AccountView } from "../Logic/Account/AccountView";
import { IconsContext } from "../Context/icons";


const LoginPage = () => {
  const { newUser} = useContext(IconsContext);
  return (
    <div className="Container">
      {newUser && <AccountCreate />}
      {!newUser && <AccountView />}
    </div>
  );
};

export { LoginPage };
