import React, {
  forwardRef,
  useCallback } from "react"
import clsx from "clsx"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(_ => ({
  root: {
    "cursor": "pointer"
  }
}))


const FancyLink = forwardRef(({
  children,
  navigate,
  href,
  ...otherProps}, ref) => {
  
  const classes = useStyles()

  const handleClick = useCallback(_ => {
    navigate(href)
  }, [navigate, href])

  return (
    <Typography
      ref={ref}
      variant
      onClick={handleClick}
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
    >
      { children }
    </Typography>
  )
})


export default FancyLink
