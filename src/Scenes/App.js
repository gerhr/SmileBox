import React from "react"
import Layout from "Components/Layout"
import { Route,
  Switch,
  Redirect } from "react-router-dom"
import ROUTES from "Scenes/constants"
import CatalogueRoute from "./Catalogue"
import MovieRoute from "./Movie"


const App = _ => (
  <Route
    path={ROUTES.INDEX}
    render={({ match: { path } }) => (
      <Layout>
        <Switch>
          <CatalogueRoute path={`${path}${ROUTES.CATALOGUE}`}/>

          <MovieRoute path={`${path}${ROUTES.MOVIE}`} />

          <Redirect
            exact
            to={`${path}${ROUTES.CATALOGUE}`}
          />
        </Switch>
      </Layout>
    )}
  />
)


export default App
