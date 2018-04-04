import React from 'react';

export default class ErrorMessage extends React.Component {

  constructor() {
    super();

    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    
  }

  render() {
    return(
      <div className="error-message-container">
        <h1>...Hmm, not sure how you got here..</h1>
        <p>Let's get you back to the App!</p>
        <button type="button" onClick={this.goHome} >HOME</button>
      </div>

    );
  }
}
