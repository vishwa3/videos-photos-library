import React from 'react';
import renderer from 'react-test-renderer';
import Videos from '../Videos';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure,mount } from 'enzyme';
import * as ReactReduxHooks from '../react-redux-hooks'

configure({adapter: new Adapter()});

describe("Photos", () => {
  let wrapper, useEffect, store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };


  beforeEach(() => {
    store = configureStore()({});
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    jest.spyOn(ReactReduxHooks, "useSelector").mockImplementation(state => store.getState());

    jest.spyOn(ReactReduxHooks, "useDispatch").mockImplementation(() => store.dispatch);

    wrapper = shallow(<Videos store={store} />);
  })

  describe("on start", () => {
    it("dispatch search Media Action to store", () => {
      const actions = store.getActions();
      expect(actions).toEqual([{ type: 'SEARCH_MEDIA_REQUEST', payload: { searchCategory: "video", searchValue: "dakota" } }])
    })

  })

  it("snapshot of Videos component", () => {
    const component = renderer.create(<Videos store={store} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should have search field', () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  })

  it('should have search Videos button', () => {
    expect(wrapper.find('input[type="submit"]').length).toEqual(1)
  })

  it('testing click', () => {
    const logSpy = jest.spyOn(console, 'log');
    const container = mount(<Videos store={store} />);
    container.find('input[type="submit"]').simulate("click");
    expect(logSpy).toBeCalledWith('hello world')

  })
})
