import { Login } from './Pages/Login';
import { Home } from './Pages/Home'
import { useEffect, useState } from 'react';
import { Layout } from './Pages/Layout';
import { ContentApp } from './Components/Content/ContentApp';
import { Account } from './Pages/Account';
import { getUser } from "./Global/storage"
import { SectionContext } from './Context/section';
import { Modal } from './Pages/Modal';
import { AddTodos } from './Pages/AddTodos';
import { SelectIconsPage } from './Pages/SelectIconsPage';
import { imagesIcons } from './Global/images';
import { IconsContext } from './Context/icons';


const App = () => {
  const userIsNew = getUser().isNew === undefined ? true : getUser().isNew;


  const [page, setPage] = useState('LOGIN');
  const [openModal, setOpenModal] = useState(false)
  const [openIcons, setOpenIcons] = useState(false)
  const [todos, setTodos] = useState([])
  const [hasTodos, setHasTodos] = useState(getUser().hasTodos)
  const [iconSelect, setIconSelect] = useState(imagesIcons[Math.floor(Math.random() * imagesIcons.length)])
  const [newUser, setNewUser] = useState(userIsNew)
  const [todosFilter, setTodosFilter] = useState('ALL')

  useEffect(() => {
    if (page === 'HOME') setTodosFilter('ALL')
    if (page === 'COMPLETED') setTodosFilter('COMPLETED')
    if (page === 'PENDING') setTodosFilter('PENDING')
  }, [page])

  return (
    <SectionContext.Provider
      value={{
        page,
        setPage,
        openModal,
        setOpenModal,
        todos,
        setTodos,
        hasTodos,
        setHasTodos,
        setOpenIcons,
        todosFilter,
      }}>
      <IconsContext.Provider
        value={{
          iconSelect,
          setIconSelect,
          newUser,
          setNewUser
        }} >

        <Layout opacity={page === 'LOGIN' ? 1 : 0.2} />

        <ContentApp>
          {page === 'LOGIN' && <Login />}
          {page === 'HOME' && <Home />}
          {page === 'ACCOUNT' && <Account />}
          {page === 'COMPLETED' && <Home />}
          {page === 'PENDING' && <Home />}
        </ContentApp>

        {openModal && (
          <Modal >
            <AddTodos />
          </Modal>
        )}

        {openIcons && (
          <Modal >
            <SelectIconsPage />
          </Modal>
        )}
      </IconsContext.Provider>

    </SectionContext.Provider>

  );
}

export { App };
