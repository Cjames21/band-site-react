import React from 'react';

import './css/navigation-menu.css';

export default class NavMenu extends React.Component {

  navBarClicked(pageClicked, e) {
    var lowerCasePageClicked = pageClicked.toLowerCase();
    this.props.onPageChange(lowerCasePageClicked);
  }

  topbarArray = this.props.topbarLinks;
  listItems = this.topbarArray.map((link) =>
    <li key={link} onClick={(e) => this.navBarClicked(link, e)} >
      {link}
    </li>
  );

  render() {
    return (
      <div className="nav-menu-container">
        <ul className="nav-menu">
          { listItems }
        </ul>
      </div>
    );
  }
}
