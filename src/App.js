import React from 'react';
import TopBar from './components/top-bar/topbar.jsx';
import Home from './home/home.js';
import About from './about/about.jsx';
import Error from './error-page/error-container.jsx';

import './App.css';

export default class App extends React.Component {

  constructor() {
    super();

    // Setting and checking the current page, delete the log once this project is finished
    const currentPage = sessionStorage.getItem('currentPage');

    // Bind any functions that this component holds to the instance that it is in
    this.handlePageChange = this.handlePageChange.bind(this);

    // Re-render page if page chosen is different from currentPage
    if (currentPage) {
      this.state = { page: currentPage };
    } else {
      this.state = { page: 'home' };
    }
  }

  // TODO: Build a function that animates the body and mobile navigation menu

  handlePageChange(pageChosen) {
    if (this.state.page === pageChosen.toLowerCase()) {
      return;
    }

    sessionStorage.setItem('currentPage', pageChosen.toLowerCase());
    this.setState({
      page: pageChosen,
    });
  }

  jsonModels = require('./json-models.json');

  render() {
    if (this.state.page === 'home') {
      return (
        <div className="index">
          <TopBar
            onPageChange={this.handlePageChange}
            topbarLinks={this.jsonModels.topbar}
            bandName={this.jsonModels.band.title} />
          <Home centerfoldData={this.jsonModels.centerfold} />
        </div>
      );
    } else if (this.state.page === 'about') {
      return (
        <div className="index">
          <TopBar
            onPageChange={this.handlePageChange}
            topbarLinks={this.jsonModels.topbar}
            bandName={this.jsonModels.band.title} />
          <About />
        </div>
      );
    } else if (this.state.page === 'music') {
      return (
        <div className="index">
          <TopBar
            onPageChange={this.handlePageChange}
            topbarLinks={this.jsonModels.topbar}
            bandName={this.jsonModels.band.title} />
        </div>
      );
    } else if (this.state.page === 'photos') {
      return (
        <div className="index">
          <TopBar
            onPageChange={this.handlePageChange}
            topbarLinks={this.jsonModels.topbar}
            bandName={this.jsonModels.band.title} />
        </div>
      );
    } else if (this.state.page === 'store') {
      return (
        <div className="index">
          <TopBar
            onPageChange={this.handlePageChange}
            topbarLinks={this.jsonModels.topbar}
            bandName={this.jsonModels.band.title} />
        </div>
      );
    } else if (this.state.page === 'contact') {
      return (
        <div className="index">
          <TopBar
            onPageChange={this.handlePageChange}
            topbarLinks={this.jsonModels.topbar}
            bandName={this.jsonModels.band.title} />
        </div>
      );
    } else {
      return (
        <div>
          <TopBar
            onPageChange={this.handlePageChange}
            topbarLinks={this.jsonModels.topbar}
            bandName={this.jsonModels.band.title} />
          <Error />
        </div>
      );
    }
  } // End of render
} // End of Body class
