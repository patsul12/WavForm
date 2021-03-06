// @flow
import React, { PropTypes } from 'react';
import styles from './styles.css';

function App({ children, settings }) {
  return (
    <div>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
