import React from 'react';
import ErrorMessage from './error-message.jsx';
import ErrorIcon from './error-icon.jsx';

export default class ErrorContainer extends React.Component {


  render() {
    return(
      <div className="">
        <ErrorMessage />
        <ErrorIcon />
      </div>
    );
  }
}
