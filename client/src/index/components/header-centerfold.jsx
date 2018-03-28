import React from 'react';
import CallToAction from './call-to-action.jsx';


export default class HeaderCenterfold extends React.Component {

  constructor(props) {
    super(props);

    // Should receive an object containing a mainText, and a subText string that
    // will be used to render this component dynamically
    const centerfoldInfo = {this.props.centerfoldData};
  }

  render() {
    return (
      <div className="header-centerfold">
        <h1 className=""></h1>
        <h3 className=""></h3>
        <CallToAction />
      </div>
    );
  }
}
