import * as actions from './actions';
import * as types from './constants';

it('should create an action to set the avatar', () => {
  const file = 'testfile';
  const expectedAction = {
    type: types.SET_AVATAR_URL,
    payload: { file }
  }
  expect(actions.setAvatar(file)).toEqual(expectedAction);
})