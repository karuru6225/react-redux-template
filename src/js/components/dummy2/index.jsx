import React from 'react';
import { FormattedMessage, FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';
import style from './dummy.scss';

export default function Dummy2({ switchLanguage, changePage }) {
  return (
    <div className={style.test} >
      <button
        onClick={() => {
          switchLanguage();
        }}
      >
        <FormattedMessage id="dummy2.dummybutton1" />
      </button>
      <button
        onClick={() => {
          changePage();
        }}
      >
        <FormattedMessage id="dummy2.dummybutton2" />
      </button>
      <div>
        <FormattedDate value={new Date()} />&nbsp;
        <FormattedTime value={new Date()} />
      </div>
      <div>
        <FormattedNumber value={1000} style="currency" currency="JPY" />
      </div>
    </div>
  );
}

Dummy2.propTypes = {
  changePage: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired
};
