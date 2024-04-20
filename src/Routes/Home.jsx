import { getUser } from "../Global/storage";
import { LoginUser } from "../Logic/Login/LoginUser";
import { LayoutPage } from "../PagesGlobal/Layout";

const user = getUser();

const HomePage = () => {
  return (
    <LayoutPage>
      <div className="LoginUser_Content">
        <LoginUser isNew={user.isNew} user={user.nickName} />
      </div>
    </LayoutPage>
  );
};

export { HomePage };
