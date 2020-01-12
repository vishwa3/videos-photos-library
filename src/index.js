import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
//import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App'
import MediaGalleryPage from './containers/MediaGalleryPage'
import Media2 from './containers/Media2'

const store = configureStore();
store.subscribe(() => {
  const newState = store.getState();
  // check out your updated state
  console.log("NS", newState)
});
/* function Routing() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/library" component={MediaGalleryPage} />
    </Router>
  )
} */

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>  
        <Route exact path="/" component={App} />
      {/*  <Route path="/library" component={MediaGalleryPage} />  */}
      <Route path="/library" component={Media2} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);