import React from 'react';
import TopBar from './top-bar/topbar.js';

import './App.css';

export default class App extends React.Component {

  constructor() {
    super();

    const currentPage = sessionStorage.getItem("currentPage");
    console.log(currentPage);

    this.handlePageChange = this.handlePageChange.bind(this);

    if(currentPage) {
       this.state = {page: currentPage};
     } else {
       this.state = {page: "index"}
    }
  }

  handlePageChange(pageChosen) {
    if(this.state.page === pageChosen) {
      return;
    }
    sessionStorage.setItem("currentPage", pageChosen);
    this.setState({
      page: pageChosen,
    });
  }

  render() {
    if(this.state.page === "index") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} />
        </div>
      );
    } else if(this.state.page === "about") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} />
        </div>
      );
    } else if(this.state.page === "music") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} />
        </div>
      );
    } else if(this.state.page === "photos") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} />
        </div>
      );
    } else if(this.state.page === "store") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} />
        </div>
      );
    } else if(this.state.page === "contact") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} />
        </div>
      );
    } else {
      return null;
    }
  } // End of render
} // End of Body class
