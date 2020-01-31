import React from 'react';
import renderer from 'react-test-renderer';
import Photos from '../Photos';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure,mount } from 'enzyme';
import * as ReactReduxHooks from '../react-redux-hooks'

configure({adapter: new Adapter()});

/* const mockStore = configureMockStore();
const store = mockStore({}); */

describe("Photos", () => {
  let wrapper,useEffect, store;
  
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };


  beforeEach(() => {
    store = configureStore()({
      img: {
        imageArray:[]
      },
      vid: {
        videoArray:[]
      },
      errorReducer: {
        error:null
      }
    });
    useEffect = jest.spyOn(React,"useEffect");
    mockUseEffect();
    mockUseEffect();

    jest.spyOn(ReactReduxHooks,"useSelector").mockImplementation(state => store.getState());

    jest.spyOn(ReactReduxHooks,"useDispatch").mockImplementation(()=>store.dispatch);
  
    wrapper = shallow(<Photos store={store} />);
  })

  describe("on start",()=> {
    it("dispatch search Media Action to store", () => {
      const actions = store.getActions();
      console.log("ac",actions);
      console.log("st",store.getState());
      expect(actions).toEqual([{type:'SEARCH_MEDIA_REQUEST',payload:{searchCategory:"image",searchValue:"dakota"}}])
    })
    it("snapshot of Photos component", () => {
      const component = renderer.create(<Photos store={store} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    })
  })
  

 /*  it("search button click should call handleSearch function", () => {
    
    wrapper.find('#search').simulate('click',{ preventDefault() {} });
    expect
  }) */

})



