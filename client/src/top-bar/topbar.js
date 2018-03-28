import React from 'react';

import './topbar.css';


export default class TopBar extends React.Component {

  navBarClicked(pageClicked, e) {
    this.props.onPageChange(pageClicked);
  }


  topbarArray = this.props.topbarLinks;
  listItems = this.topbarArray.map((link) =>
    <li key={link}>
      {link}
    </li>
  );
    // NavBar will consist of img on the left side and the three navigation links on the right side.
    render() {
        return (
          <nav className="top-bar">
           <div className="top-bar-left">
             <img src="" onClick={(e) => this.navBarClicked("index", e)} alt="Website Logo" />
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
