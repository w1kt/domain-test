import { State } from '../../../reducers/rootReducer';
import { connect } from 'react-redux';
import HCardPreview from '../components/HCardPreview';
import { UserDetails } from '../../HCardBuilder/components/UserDetails';

const mapStateToProps = (state: State) => {
  const formState = state.form.hCardBuilder;
  let res = {
    avatarUrl: state.hCardBuilder.avatarUrl
  }
  if (!formState) {
    return res;
  }
  const userDetails = formState.values as Partial<UserDetails>;
  return {
    ...res,
    ...userDetails
  }
};

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(HCardPreview);

export type HCardPreviewProps = ReturnType<typeof mapStateToProps> &
  typeof mapStateToDispatch;
