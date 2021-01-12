import React from "react"
import { HeaderSlot,
  FooterSlot } from "./slots"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import useStyles from "./styles"
import logo from "./images/logo.svg"


const Layout = ({ children }) => {
  const classes = useStyles()
  
  return (
  <div className={classes.root}>
    <AppBar
        position="static"
        classes={{
          root: classes.appbar
        }}
    >
      <img
          src={logo}
          className={classes.logo}
          alt="logo"
      />

      <Typography
        className={classes.title}
        variant="subtitle1"
      >
        <HeaderSlot />
      </Typography>

    </AppBar>

    <Container fixed className={classes.main}>
        { children }
    </Container>

    <div className={classes.footer}>
      <FooterSlot />
    </div>
  </div>
)}


export default Layout
