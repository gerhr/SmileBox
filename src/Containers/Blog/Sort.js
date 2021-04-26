import React, {
  useContext,
  useCallback } from "react"
import TimeSort from "Components/TimeSort"
import BlogContext from "./context"


const SortControl = _ => {
  const { reverseChronology,
        setReverseChronology } = useContext(BlogContext)

  const handleSortChange = useCallback(_ => {
    setReverseChronology(!reverseChronology)
  }, [reverseChronology, setReverseChronology])


  return (
    <TimeSort
      reversed={reverseChronology}
      onClick={handleSortChange}
    />
  )
}


export default SortControl
