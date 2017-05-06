import { connect } from 'react-redux';
import Dummy from 'components/dummy/index.jsx';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(/* dispatch */) {
  return {
    handleSomething: () => {
      console.log('handleSomething');
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy);
