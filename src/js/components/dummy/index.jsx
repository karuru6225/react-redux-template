import React from 'react';
import PropTypes from 'prop-types';
import style from './dummy.scss';

export default class extends React.Component {
  static propTypes = {
    handleSomething: PropTypes.func
  }
  static defaultProps = {
    handleSomething: () => { }
  }
  render() {
    return (
      <div
        className={style.test}
      >
        <div className={style.testOne}>Hello, World!!</div>
        <button
          className={style.testTwo}
          onClick={() => {
            this.props.handleSomething();
          }}
        />
      </div>
    );
  }
}
