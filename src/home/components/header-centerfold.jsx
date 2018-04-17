import React from 'react';
import CallToAction from '../../components/call-to-action/call-to-action.jsx';

export default class HeaderCenterfold extends React.Component {

  centerfoldData = this.props.centerfoldData;

  render() {
    return (
      <div className="header-centerfold">
        <h1 className="">{this.centerfoldData.headline}</h1>
        <h3 className="">{this.centerfoldData.subline}</h3>
        <CallToAction />
      </div>
    );
  }
}
