import React from 'react';

export default class MobileTopBar extends React.Component {

  constructor(props) {
    super(props);
    this.navMenuRef = React.createRef();
  }

  menuIsOpen = false;

  topbarArray = this.props.topbarLinks;
  listItems = this.topbarArray.map((link) =>
    <li key={link} onClick={(e) => this.navBarClicked(link, e)} >
      {link}
    </li>
  );

  navBarClicked(link, e) {
    alert('Nav bar clicked!');
    return;
  }

  toggleNavMenu() {
    var element = document.getElementById('nav-menu');
    var className = 'show-nav-menu';
    if (!element) {
      return;
    }

    var classString = element.className;
    var nameIndex = classString.indexOf(className);
    if (nameIndex === -1) {
      classString += ' ' + className;
    } else {
      classString = classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length);
    }

    element.className = classString;
  }

  // NavBar will consist of img on the left side and the three navigation links on the right side.
  render() {
    return (
        <div className="mobile-topbar top-bar">
          <div className="menu-button-container">
            <button className="hamburger-menu"
                    type="button"
                    onClick={this.toggleNavMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="band-title">
            <h1>{this.props.bandName}</h1>
          </div>
          <div className="cart-container">
            <button className="cart"
                    type="button">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>

          <div className="mobile-nav-menu expanded row" id="nav-menu">
            <ul className="nav-list vertical menu">
              { this.listItems }
            </ul>
          </div>
        </div>
      );

  }
}
