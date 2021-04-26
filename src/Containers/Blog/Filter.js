import React, {
  useContext,
  useCallback } from "react"
import Filter from "Components/Filter"
import BlogContext from "./context"
import { CATHEGORIES } from "./constants"

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
        cathegories={CATHEGORIES}
        seelectedCathegory={selectedCathegory}
        onChange={handleChange}
      />
    </>
  )
}


export default FilterBar
