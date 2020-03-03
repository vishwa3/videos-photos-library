import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./containers/App";
import Header from "./containers/Header";
import Photos from "./containers/Photos";
import Videos from "./containers/Videos";
import About from "./containers/About";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/searchImages" component={Photos} />
        <Route path="/searchVideos" component={Videos} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
