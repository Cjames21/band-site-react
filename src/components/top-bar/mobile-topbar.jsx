import React from 'react';

export default class MobileTopBar extends React.Component {

  constructor() {
    super();
    this.toggleNavMenu = this.toggleNavMenu.bind(this);
  }

  toggleNavMenu() {
    // TODO: Write animation function in app.js, call the function from here
    alert('Button Clicked!');
    return;
  }

  // NavBar will consist of img on the left side and the three navigation links on the right side.
  // TODO: Write the CSS to make this pretty
  render() {
    return (
        <div className="mobile-topbar top-bar">
          <button type="button" onClick={this.toggleNavMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="band-title">
            <h1>{this.props.bandName}</h1>
          </div>
          <div className="cart-container">
            <button className="cart">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      );

  }
}
