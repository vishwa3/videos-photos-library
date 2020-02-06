import imageReducer from '../imageReducer';
import * as types from '../../constants/actionTypes';

describe('imageReducer', ()=> {
  it('test initialState', () => {
    const action = {
      type:'dummyAction'
    }
    const initialState = {
      imageArray:[],
    }

    expect(imageReducer(undefined,action)).toEqual(initialState);
  })

  it('returns correct state for action type FLICKR_IMAGES_SUCCESS' , () => {
    const action = {
      type: types.FLICKR_IMAGES_SUCCESS,
      images:['img1','img2']
    }
    const expectedState = {
      imageArray:['img1','img2']
    }
    expect(imageReducer(undefined,action)).toEqual(expectedState);
  }) 
})