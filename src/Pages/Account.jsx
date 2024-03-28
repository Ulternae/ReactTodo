import { useContext } from "react"
import { AccountCreate } from "../Logic/Account/AccountCreate"
import { AccountView } from "../Logic/Account/AccountView"
import { IconsContext } from "../Context/icons"

const Account = () => {

  const { newUser } = useContext(IconsContext)
  console.log(newUser)
  return (
      <div className="Container">
        {newUser && <AccountCreate/>}
        {!newUser && <AccountView/>}
      </div>

  )
}

export { Account } 
