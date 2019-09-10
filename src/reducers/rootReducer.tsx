import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer
})

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;