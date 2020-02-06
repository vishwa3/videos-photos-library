import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Header', () => {
  test('snapshot for Header', ()=> {
    const component = renderer.create(<Router><Header /></Router>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})