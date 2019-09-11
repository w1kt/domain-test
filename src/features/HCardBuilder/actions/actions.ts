import { SET_AVATAR } from './constants';

export const setAvatar = (file: string) => {
  return { type: SET_AVATAR, payload: { file } };
};

export type Actions = ReturnType<typeof setAvatar>;
