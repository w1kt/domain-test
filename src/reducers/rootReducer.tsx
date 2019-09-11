import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import hCardBuilder from '../features/HCardBuilder/reducers/reducer';

const rootReducer = combineReducers({
  hCardBuilder,
  form: formReducer
});

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
