import s from "./SearchInput.module.css"


function SearchInput(props) {
  const { handleFilter } = props;

  return (
    <div className={s.searchBarDropdown}>
      <input type="text" 
      onChange={handleFilter}
      placeholder="Search for an emoji"/>
    </div>
  )
}

export default SearchInput;