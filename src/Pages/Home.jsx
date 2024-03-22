import { All } from "../Logic/Todos/All"
import { Footer } from "../Pages/Footer"
import { getUser } from "../Global/storage"
import { NewUser } from "../Logic/Todos/NewUser"
const isNew = getUser().isNew

const Home = ({setPage}) => {
  return (
    <>
      {isNew && <NewUser/>}
      {!isNew && <All/>}
      <Footer/>
    </>
  )
}

export { Home }
