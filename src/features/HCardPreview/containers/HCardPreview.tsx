import { State } from '../../../reducers/rootReducer';
import { connect } from 'react-redux';
import HCardPreview from '../components/HCardPreview';
import { UserDetails } from '../../HCardBuilder/components/UserDetails';

const mapStateToProps = (state: State) => {
  const formState = state.form.hCardBuilder;
  if (!formState) {
    return {};
  }
  const userDetails = formState.values as Partial<UserDetails>;
  return userDetails;
};

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(HCardPreview);

export type HCardPreviewProps = ReturnType<typeof mapStateToProps> &
  typeof mapStateToDispatch;
