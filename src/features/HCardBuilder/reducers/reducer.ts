import { Actions } from '../actions/actions';
import { SET_AVATAR } from '../actions/constants';

type HCardBuilderState = Readonly<{
  avatar: string;
}>;

const initialState: HCardBuilderState = {
  avatar: ''
};

export default (state = initialState, action: Actions): HCardBuilderState => {
  switch (action.type) {
    case SET_AVATAR: {
      state = {
        ...state,
        avatar: action.payload.file
      };
    }
    default: {
      return state;
    }
  }
};
