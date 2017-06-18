import { connect } from 'react-redux';
import Dummy from 'components/dummy2/index.jsx';
import { updateIntl } from 'react-intl-redux';
import messages from 'locales/messages';

function mapStateToProps(state) {
  return state;
}

let localeIdx = 0;

function mapDispatchToProps(dispatch) {
  return {
    changePage: () => {
      location.hash = '/';
    },
    switchLanguage: () => {
      localeIdx += 1;
      const locales = Object.keys(messages);
      localeIdx %= locales.length;
      const locale = locales[localeIdx];
      dispatch(updateIntl({
        locale,
        messages: messages[locale]
      }));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy);
