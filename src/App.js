import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { observable } from "mobx";
import { observer } from "mobx-react";
import Helmet from 'react-helmet'
import Home from './views/Home'
import About from './views/About'
import NoMatch from './views/NoMatch'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import Nav from './components/Nav'
import NavLink from './components/NavLink'

const title = 'You Are Doing Great'
const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'About',
    path: '/about',
    component: About
  }
]

let appState = observable({ timer: 0 });

appState.resetTimer = function reset() {
  appState.timer = 0;
};

setInterval(
  function tick() {
    appState.timer += 1;
  },
  1000
);


@observer
class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>

          <Helmet titleTemplate={`%s - ${title}`} />

          <button id="reset" onClick={() => appState.resetTimer()}>
            <span className="txt">Seconds passed:</span>
            {" "}
            <span className="timer">{appState.timer}</span>
          </button>
         
<Title>YADG</Title>
          <Nav>
            <h1>Navigation</h1>
            {routes.map((route, i) => (
              <NavLink key={i} {...route} />
            ))}
          </Nav>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>


        </Wrapper>
      </Router>
    );
  }
}

export default App;
