import React, {
  useCallback,
  useMemo } from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import _debounce from "lodash/debounce"


const SearchField = ({
  onChange,
  params
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleChange = useCallback(_debounce(event => {
    onChange(event.target.value)
  }, 300), [onChange])

  const memoisedParams = useMemo(() => params.map(el => el.Title), [params])

  const handleAutofill = useCallback( (event, value, reason) => {
    if (reason === "select-option") {
      onChange(value)
    }
  },[onChange])

  return (
    <Autocomplete
      freeSolo
      id="solo-search"
      disableClearable
      onChange={handleAutofill}
      options={memoisedParams}
      renderInput={(params) => (
        <TextField
          onChange={debouncedHandleChange}
          label="Search movie"
          margin="normal"
          variant="outlined"
          {...params}
        />
      )}
    />
  )
}


export default SearchField
