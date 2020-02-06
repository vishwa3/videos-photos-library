import errorReducer from '../errorReducer';
import * as types from '../../constants/actionTypes';

describe('errorReducer', () => {
  it('test initialState', () => {
    const action = {
      type: 'dummyAction'
    }
    const initialState = {
      error: null,
    }

    expect(errorReducer(undefined, action)).toEqual(initialState);
  })

  it('returns correct state for action type SEARCH_MEDIA_FAILURE', () => {
    const action = {
      type: types.SEARCH_MEDIA_FAILURE,
      error: 'error'
    }
    const expectedState = {
      error:'error'
    }
    expect(errorReducer(undefined, action)).toEqual(expectedState);
  })
})