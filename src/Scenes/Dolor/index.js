import React from "react"
import { Route } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import { HeaderPlug } from "Components/Layout"


const DolorRoute = ({ path }) => (
  <Route path={path}
    render={_ => (<>
      <HeaderPlug>
        <Typography variant={"h5"}>
          Dolor
        </Typography>
      </HeaderPlug>
    </>)}
  />
)


export default DolorRoute
