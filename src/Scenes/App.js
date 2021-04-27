import React from "react"
import { Route,
  Switch,
  Redirect,
  NavLink } from "react-router-dom"
import Layout, {
  NavPlug } from "Components/Layout"
import Nav from "Components/Nav"
import FancyLink from "Components/FancyLink"
import ROUTES from "Scenes/constants"
import Blog, {
  NewPostForm } from "Containers/Blog"
import CatalogueRoute from "./Catalogue"
import MovieRoute from "./Movie"
import LoremRoute from "./Lorem"
import IpsumRoute from "./Ipsum"
import DolorRoute from "./Dolor"


const App = _ => (
  <Route
    path={ROUTES.INDEX}
    render={({ match: { path } }) => (
      <Layout>

        <NavPlug>
          <Nav>
            <NavLink to={`/${ROUTES.LOREM}`} component={FancyLink}>Lorem</NavLink>

            <NavLink to={`/${ROUTES.IPSUM}`} component={FancyLink}>Ipsum</NavLink>

            <NavLink to={`/${ROUTES.DOLOR}`} component={FancyLink}>Dolor</NavLink>

            <NavLink to={`/${ROUTES.CATALOGUE}`} component={FancyLink}>Catalogue</NavLink>
          </Nav>
        </NavPlug>

        <Blog>
          <Switch>
            <CatalogueRoute path={`${path}${ROUTES.CATALOGUE}`}/>

            <MovieRoute path={`${path}${ROUTES.MOVIE}`} />

            <LoremRoute path={`${path}${ROUTES.LOREM}`} />

            <IpsumRoute path={`${path}${ROUTES.IPSUM}`} />

            <DolorRoute path={`${path}${ROUTES.DOLOR}`} />

            <Redirect
              exact
              to={`${path}${ROUTES.CATALOGUE}`}
            />
          </Switch>

          <NewPostForm />

        </Blog>

      </Layout>
    )}
  />
)


export default App
