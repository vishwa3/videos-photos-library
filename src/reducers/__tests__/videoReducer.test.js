import videoReducer from '../videoReducer';
import * as types from '../../constants/actionTypes';

describe('videoReducer', ()=> {
  it('test initialState', () => {
    const action = {
      type:'dummyAction'
    }
    const initialState = {
      videoArray:[],
    }

    expect(videoReducer(undefined,action)).toEqual(initialState);
  })

  it('returns correct state for action type SHUTTER_VIDEOS_SUCCESS' , () => {
    const action = {
      type: types.SHUTTER_VIDEOS_SUCCESS,
      videos:['vid1','vid2']
    }
    const expectedState = {
      videoArray:['vid1','vid2']
    }
    expect(videoReducer(undefined,action)).toEqual(expectedState);
  }) 
})