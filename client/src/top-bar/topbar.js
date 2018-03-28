import React from 'react';

import './topbar.css';


export default class TopBar extends React.Component {


    navBarClicked(pageClicked, e) {
      this.props.onPageChange(pageClicked);
    }


    // NavBar will consist of img on the left side and the three navigation links on the right side.
    render() {
        return (
          <nav className="top-bar">
           <div className="top-bar-left">
             <img src="" onClick={(e) => this.navBarClicked("index", e)} alt="C James Web Dev Logo" />
           </div>
           <div className="top-bar-right">
             <ul className="menu navigation">
               <li className="" onClick={(e) => this.navBarClicked("index", e)}><a>HOME</a></li>
               <li className="" onClick={(e) => this.navBarClicked("about", e)}><a>ABOUT</a></li>
               <li className="" onClick={(e) => this.navBarClicked("music", e)}><a>MUSIC</a></li>
               <li className="" onClick={(e) => this.navBarClicked("photos", e)}><a>PHOTOS</a></li>
               <li className="" onClick={(e) => this.navBarClicked("store", e)}><a>STORE</a></li>
               <li className="" onClick={(e) => this.navBarClicked("contact", e)}><a>CONTACT</a></li>
             </ul>
           </div>
          </nav>
        );

    }
}
