import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router-dom';
import style from './dummy.scss';

function Dummy1({ intl }) {
  return (
    <div
      className={style.test}
    >
      <div className={style.testOne}>
        { intl.formatMessage({ id: 'dummy1.helloworld' }) }
      </div>
      <Link to="/dummy">
        { intl.formatMessage({ id: 'dummy1.link' }) }
      </Link>
    </div>
  );
}

Dummy1.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Dummy1);
