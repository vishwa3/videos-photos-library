import React, { Component } from 'react';
import Header from '../common/Header';
import HomePage from '../components/HomePage';
// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
    console.log("in App");
    return (
      <div className="container-fluid text-center">
        <Header />
        <HomePage />
      </div>
    );
  }
}


export default App;