import React from 'react';
import renderer from 'react-test-renderer';
import About from '../About';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('About', () => {
  test('snapshot for About', ()=> {
    const component = renderer.create(<About />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})