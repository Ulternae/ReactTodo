import { All } from "../Logic/Todos/All"
import { Footer } from "../Pages/Footer"
import { NewUser } from "../Logic/Todos/NewUser"
import { useContext } from "react"
import { SectionContext } from "../Context/section"

const Home = () => {
  const { hasTodos } = useContext(SectionContext)
  return (
    <>
      {!hasTodos && <NewUser/>}
      {hasTodos && <All/>}
      <Footer/>
    </>
  )
}

export { Home }
