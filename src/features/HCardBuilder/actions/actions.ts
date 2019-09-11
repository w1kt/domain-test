import { SET_AVATAR_URL } from './constants';

export const setAvatar = (file: string) => {
  return { type: SET_AVATAR_URL, payload: { file } };
};

export type Actions = ReturnType<typeof setAvatar>;
