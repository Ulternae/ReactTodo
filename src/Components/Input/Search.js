import iconSearch from "../../Assets/iconSearch.svg"

const Search = ({ accion, value }) => {

  return (
    <div className="SearchContainer">
      <input
        onChange={accion}
        className="Search"
        value={value}
        placeholder="Cortar onions">
      </input>
      <img src={iconSearch} alt="search"></img>
    </div>
  )
}

export { Search }