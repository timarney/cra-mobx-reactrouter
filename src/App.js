import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import { Provider } from "mobx-react";

import NoMatch from "./views/NoMatch";
import { Wrapper, Title, Nav, NavLink } from "./components/";
import Store from "./stores/Store";
import routes from "./routes";

const title = "Template All The Things";
const store = new Store();
store.fetch();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
          </Wrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;
