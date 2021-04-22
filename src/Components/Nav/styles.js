import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {
    "display": "flex",
    "flex-direction": "row"
  },
  list: {

  },
  navItem: {
    "padding": theme.spacing(0, 3),

  // #TODO Fix
    ">*": {
      "text-decoration": "none !important",
    }
  }
}))


export default useStyles
