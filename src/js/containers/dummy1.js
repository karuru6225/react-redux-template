import { connect } from 'react-redux';
import Dummy from 'components/dummy1/index.jsx';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(/* dispatch */) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy);
