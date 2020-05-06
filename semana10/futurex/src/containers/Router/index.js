import React from "react";
import { applyMiddleware } from "redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage/home.js";
import CandidateForm from "../CandidateForm/index.js";
//import TripList from "../TripList/index.js";

const routes = {
  root: "/login",
  home: "/",
  candidateForm: "/candidateForm",
  //tripList: "/tripList"

  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.cadidateForm} component={CandidateForm}/>
        {/*<Route exact path={routes.tripList} component={TripList}/>*/}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
