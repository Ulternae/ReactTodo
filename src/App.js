import { Login } from './Pages/Login';
import { Home } from './Pages/Home'
import { useState } from 'react';
import { Layout } from './Pages/Layout';
import { ContentApp } from './Components/Content/ContentApp';
import { Account } from './Pages/Account';
import { getUser } from "./Global/storage" 
const isNew = getUser().isNew

const App = () => {

  const [page, setPage] = useState('LOGIN');

  return (

    <>
      <Layout opacity={page === 'LOGIN' ? 1 : 0.2} />

      <ContentApp>
        {page === 'LOGIN' && <Login setPage={setPage} />}
        {page === 'HOME' && <Home setPage={setPage} />}
        {/* {page === 'HOME' && <Account isNew={isNew}/>} */}
      </ContentApp>

    </>

  );
}

export { App };
