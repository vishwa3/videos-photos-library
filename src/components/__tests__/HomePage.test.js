import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../HomePage';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('HomePage', () => {
  test('snapshot for HomePage', ()=> {
    const component = renderer.create(<Router><HomePage /></Router>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})