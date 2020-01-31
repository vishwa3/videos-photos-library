import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('App',() => {
  test('snapshot for App', () => {
    const component = renderer.create(<Router><App /></Router>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})