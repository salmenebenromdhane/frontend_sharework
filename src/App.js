import React from "react";
import "./App.css";

//Import UI components
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Import components
import NavBar from "./components/NavBar/NavBar";
import CompaniesList from "./components/Companies/CompaniesList/CompaniesList";
import CompanyDetails from "./components/Companies/CompanyDetails/CompanyDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/companies" />
        </Route>
        <Route
          path="/companies"
          render={() => {
            return (
              <>
                <NavBar />
                <CompaniesList />
              </>
            );
          }}
        />

        <Route
          path="/company-details/:id"
          render={() => {
            return (
              <>
                <NavBar />
                <CompanyDetails />
              </>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;