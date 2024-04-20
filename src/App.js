// import { Login } from './Pages/Login';
// import { Home } from './Pages/Home'
// import { useContext } from 'react';
// import { Layout } from './Pages/Layout';
// import { ContentApp } from './Components/Content/ContentApp';
// import { Account } from './Pages/Account';
// import { Modal } from './Pages/Modal';
// import { AddTodos } from './Pages/AddTodos';
// import { SelectIconsPage } from './Pages/SelectIconsPage';
// import { GlobalContext } from './Context/global';
// import { IconsContext } from './Context/icons';
// import { SectionContext } from './Context/section';
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Routes/Home";
import { TodosPage } from "./Routes/Todos";
import { NotFoundPage } from "./Routes/NotFound";
import { LoginPage } from "./Routes/Login";

const App = () => {
  // const { page, openModal, openIcons, setOpenModal, setOpenIcons } = useContext(GlobalContext)
  // const { newUser, iconSelect, setIconSelect } = useContext(IconsContext);
  // const { hasTodos, setTodos, setHasTodos } = useContext(SectionContext)

  return (
    <>
      <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Todos" element={<TodosPage />}/> 
            <Route path="/Todos/:type" element={<TodosPage />}/> 
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </HashRouter>

      {/* <Layout opacity={page === 'LOGIN' ? 1 : 0.2} />

      <ContentApp 
        page={page}
        onLogin = {() => <Login />}
        onAccount = {() => <Account newUser={newUser} />}
        onHome = {() => <Home hasTodos={hasTodos} />}
      />

      {openModal && (
        <Modal >
          <AddTodos
            setTodos={setTodos}
            setHasTodos={setHasTodos}
            setOpenModal={setOpenModal} />
        </Modal>
      )}

      {openIcons && (
        <Modal >
          <SelectIconsPage
            setOpenIcons={setOpenIcons}
            iconSelect={iconSelect}
            setIconSelect={setIconSelect} />
        </Modal>
      )} */}
    </>
  );
};

export { App };
