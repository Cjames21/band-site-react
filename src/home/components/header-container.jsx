import React from 'react';
import HeaderCenterfold from './header-centerfold.jsx';
import './header.css';

export default class HeaderContainer extends React.Component {

  width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  centerfoldData = this.props.centerfoldData;

  render() {
    return (
      <div style={this.headerStyles} className="header-container">
        <HeaderCenterfold centerfoldData={this.centerfoldData}/>
      </div>
    );
  }
}
