import React from 'react';
import '../index.css';

export default class HeaderContainer extends React.Component {


  width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  imgPath = this.width > '641' ? require('../../img/band-site-header.jpg') : require('../../img/mobile-band-site-header.jpg');

  // I'm only doing this because of the image needed to be required in jsx
  headerStyles = {
    backgroundImage: "url(" + this.imgPath + ")",
    height: '60%'
  }


  render() {
    return (
      <div style={this.headerStyles} className="header-container">
        <p>h</p>
      </div>
    );
  }
}
