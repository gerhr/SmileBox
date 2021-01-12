import React, {
  useState,
  useEffect } from "react"
import axios from "axios"
import { SearchFormContext } from "./context"


const {
  REACT_APP_API_URL,
  REACT_APP_API_KEY } = process.env


const SearchForm = ({
  children
}) => {
  const [searchRequest, setSearchRequest] = useState("")
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    searchRequest.length && axios({
      baseURL: REACT_APP_API_URL,
      params: {
        apikey: REACT_APP_API_KEY,
        s: searchRequest
      }
    })
    .then(res => {
      setSearchResult(
        res.data.Response === "True" ? res.data.Search : []
      )
    })
    .catch(err => {
      console.log("👁", err)
    })
  }, [searchRequest])

  return (
    <SearchFormContext.Provider
      value={{
        searchRequest,
        onRequestChange: setSearchRequest,
        searchResult
      }}
    >
      { children }
    </SearchFormContext.Provider>
  )
}


export default SearchForm
