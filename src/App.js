import React from 'react';
import TopBar from './top-bar/topbar.js';
import Home from './home/home.js';
import Error from './error-page/error-container.jsx';

import './App.css';

export default class App extends React.Component {

  constructor() {
    super();

    // Setting and checking the current page, delete the log once this project is finished
    const currentPage = sessionStorage.getItem("currentPage");

    // Bind any functions that this component holds to the instance that it is in
    this.handlePageChange = this.handlePageChange.bind(this);

    // Re-render page if page chosen is different from currentPage
    if(currentPage) {
       this.state = {page: currentPage};
     } else {
       this.state = {page: "home"}
    }
  }

  handlePageChange(pageChosen) {
    if(this.state.page === pageChosen.toLowerCase()) {
      return;
    }
    sessionStorage.setItem("currentPage", pageChosen.toLowerCase());
    this.setState({
      page: pageChosen,
    });
  }



  jsonModels = require('./json-models.json');

  render() {
    if(this.state.page === "home") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} topbarLinks={this.jsonModels.topbar} />
          <Home centerfoldData={this.jsonModels.centerfold} />
        </div>
      );
    } else if(this.state.page === "about") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} topbarLinks={this.jsonModels.topbar} />
        </div>
      );
    } else if(this.state.page === "music") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} topbarLinks={this.jsonModels.topbar} />
        </div>
      );
    } else if(this.state.page === "photos") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} topbarLinks={this.jsonModels.topbar} />
        </div>
      );
    } else if(this.state.page === "store") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} topbarLinks={this.jsonModels.topbar} />
        </div>
      );
    } else if(this.state.page === "contact") {
      return (
        <div className="index">
          <TopBar onPageChange={this.handlePageChange} topbarLinks={this.jsonModels.topbar} />
        </div>
      );
    } else {
      return (
        <div>
          <TopBar onPageChange={this.handlePageChange} topbarLinks={this.jsonModels.topbar} />
          <Error />
        </div>
      );
    }
  } // End of render
} // End of Body class