import { AccountCreate } from "../Logic/Account/AccountCreate"
import { AccounView } from "../Logic/Account/AccounView"

const Account = ({isNew}) => {
  return (
    <div className="Container">
      {isNew && <AccountCreate/>}
      {!isNew && <AccounView/>}
    </div>
  )
}

export { Account }
