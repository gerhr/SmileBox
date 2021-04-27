import React, {
  useContext,
  useCallback } from "react"
import Filter from "Components/Filter"
import BlogContext from "./context"
import { CATHEGORIES,
  DEFAULT_CATHEGORY } from "./constants"

const FilterBar = _ => {
  const {
    selectedCathegory,
    setSelectedCathegory } = useContext(BlogContext)

  const handleChange = useCallback(value => {
    setSelectedCathegory(value)
  },[setSelectedCathegory])

  return (
    <>
      <Filter
        defaultValue={DEFAULT_CATHEGORY}
        cathegories={CATHEGORIES}
        seelectedCathegory={selectedCathegory}
        onChange={handleChange}
      />
    </>
  )
}


export default FilterBar
