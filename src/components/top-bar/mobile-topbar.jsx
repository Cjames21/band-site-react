import React from 'react';

import './topbar.css';

export default class MobileTopBar extends React.Component {

  navBarClicked(pageClicked, e) {
    var lowerCasePageClicked = pageClicked.toLowerCase();
    console.log(lowerCasePageClicked);
    this.props.onPageChange(lowerCasePageClicked);
  }

  topbarArray = this.props.topbarLinks;
  listItems = this.topbarArray.map((link) =>
    <li key={link} onClick={(e) => this.navBarClicked(link, e)} >
      {link}
    </li>
  );

  // NavBar will consist of img on the left side and the three navigation links on the right side.
  render() {
    return (
        <nav className="top-bar">
          <div className="top-bar-left">
            <img src="" onClick={(e) => this.navBarClicked('home', e)} alt="Website Logo" />
          </div>
          <div className="top-bar-right">
            <ul className="menu navigation">
              {this.listItems}
            </ul>
          </div>
        </nav>
      );

  }
}
