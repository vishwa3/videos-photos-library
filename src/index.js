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
import MediaThunk from './containers/MediaThunk'
import Header from './common/Header';
import HomePage from './components/HomePage'
import Photos from './containers/Photos'
import Videos from './containers/Videos'
const store = configureStore();
store.subscribe(() => {
  const newState = store.getState();
  // check out your updated state
// console.log("NS", newState)
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Header />
      <Switch>  
        <Route exact path="/" component={App} />
      <Route path="/library" component={Media2} />
      <Route path='/searchImages' component={Photos} />
      <Route path='/searchVideos' component={Videos} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);