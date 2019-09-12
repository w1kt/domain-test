import { Actions } from '../actions/actions';
import { SET_AVATAR_URL } from '../actions/constants';

type HCardBuilderState = Readonly<{
  avatarUrl: string;
}>;

const initialState: HCardBuilderState = {
  avatarUrl: ''
};

export default (state = initialState, action: Actions): HCardBuilderState => {
  switch (action.type) {
    case SET_AVATAR_URL: {
      return {
        ...state,
        avatarUrl: action.payload.file
      };
    }
    default: {
      return state;
    }
  }
};
