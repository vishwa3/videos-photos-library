import * as actions from './mediaActions';
import * as types from '../constants/actionTypes'

describe('actions', ()=> {
  it('searchMediaAction', () => {
    const expectedsearchMediaAction = {
      type: types.SEARCH_MEDIA_REQUEST,
      payload : {
        searchValue:"dakota",
        searchCategory:"image"
      }
    }
    expect(actions.searchMediaAction("dakota", "image")).toEqual(expectedsearchMediaAction)
  })
})