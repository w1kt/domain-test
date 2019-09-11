import reducer from './reducer';
import * as types from '../actions/constants';

it('should return the initial state', () => {
  expect(reducer(undefined, {} as any)).toEqual({ avatarUrl: '' });
});

it('should handle SET_AVATAR_URL', () => {
  expect(
    reducer(
      undefined,
      {
        type: types.SET_AVATAR_URL,
        payload: { file: 'testfile' }
      }
    )
  ).toEqual({
    avatarUrl: 'testfile'
  });
});
