import React from 'react';
import { IntlProvider } from 'react-intl';
import localizedMessages from 'locales/messages';

export default function IntlWrapper({ lang, children }) {
  return (
    <IntlProvider
      locale={lang}
      messages={localizedMessages[lang]}
    >
      {children}
    </IntlProvider>
  );
}

IntlWrapper.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired,
  lang: React.PropTypes.string.isRequired
};
