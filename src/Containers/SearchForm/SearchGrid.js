import React, {
  useContext,
  useMemo,
  useCallback } from "react"
import { useHistory } from "react-router-dom"
import { ROUTES } from "Scenes"
import { SearchFormContext } from "./context"
import GalleryGrid from "Components/GalleryGrid"


const SearchGrid = _ => {
  const { searchResult } = useContext(SearchFormContext)
  const history = useHistory()

  const items = useMemo(() =>
    searchResult.map(item => ({
      img: item.Poster,
      title: item.Title,
      id: item.imdbID
    }))
  , [searchResult])

  const handleSelect = useCallback(itemId => {
    history.push(`${ROUTES.INDEX}${ROUTES.MOVIE}/${itemId}`)
  }, [history])

  return (
    <GalleryGrid
      onSelect={handleSelect}
      items={items}
    />
  )
}


export default SearchGrid
