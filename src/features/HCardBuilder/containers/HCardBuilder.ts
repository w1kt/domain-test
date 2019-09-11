import { connect } from 'react-redux';
import { ConfigProps, DecoratedComponentClass } from 'redux-form';
import { State } from '../../../reducers/rootReducer';
import { setAvatar } from '../actions/actions';
import HCardBuilderForm from '../components/HCardBuilder';

type OwnProps = DecoratedComponentClass<
  {},
  Partial<ConfigProps<{}, {}, string>>,
  string
>;

const mapStateToProps = (state: State, ownProps: OwnProps) => ({});
const mapStateToDispatch = {
  setAvatar
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(HCardBuilderForm);

export type HCardBuilderProps = ReturnType<typeof mapStateToProps> &
  typeof mapStateToDispatch
