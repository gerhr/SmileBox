import React, {
  useContext } from "react"
import { SearchFormContext } from "./context"
import SearchField from "Components/SearchField"


const SearchFieldContainer = () => {
  const {
    onRequestChange,
    searchResult } = useContext(SearchFormContext)

  return (
    <SearchField
      onChange={onRequestChange}
      params={searchResult}
    />
  )
}


export default SearchFieldContainer
