import React from 'react';


export default class CallToAction extends React.Component {

  constructor() {
    super();

    this.callToAction = this.callToAction.bind(this);
  }

  callToAction() {
    console.log("Shit just went down!");
  }


  render() {
    return (
      <div className="call-to-action button">
        <button
          type="button"
          className="call-to-action-button"
          onClick={this.callToAction}>
          AVAILABLE NOW!
        </button>
      </div>
    );
  }
}
