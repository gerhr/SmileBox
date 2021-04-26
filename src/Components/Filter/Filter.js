import React, {
  useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"


const useStyles = makeStyles(_ => ({
  root: {
    "width": "140px"
  }
}))


const Filter = ({
  cathegories,
  selectedCathegory,
  onChange
}) => {
  const classes = useStyles()

  const handleChange = useCallback(event => {
    onChange(event.target.value)
  }, [onChange])

  return (
    <Select
      classes={{
        root: classes.root
      }}
      defaultValue={"all"}
      value={selectedCathegory}
      onChange={handleChange}
    >
      <MenuItem key={`option_idle`} value={"all"}>
        all
      </MenuItem>
      {
        cathegories.map(cathegory => (
          <MenuItem key={`option_${cathegory}`} value={cathegory}>
            {cathegory}
          </MenuItem>
        ))
      }
    </Select>
  )
}


export default Filter