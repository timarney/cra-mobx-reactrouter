import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import NoMatch from "./views/NoMatch";
import { Wrapper, Title, Nav, NavLink, Counter } from "./components/";
import Store from "./stores/Store";
import routes from "./routes";

const title = "Template All The Things";
const store = new Store();

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} />
          <Title>cra-mobx-reactrouter</Title>
          <Nav>
            {routes.map((route, i) => <NavLink key={i} {...route} />)}
          </Nav>
          <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
            <Route component={NoMatch} />
          </Switch>
          <Counter store={store} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
