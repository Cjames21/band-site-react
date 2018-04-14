import React from 'react';
import HeaderCenterfold from './components/header-centerfold.jsx';
import UpcomingShows from './components/upcoming-shows.jsx';

import './home.css';

export default class Home extends React.Component {
  centerfoldData = this.props.centerfoldData;

  render() {
    return (
      <div className="home-page">
        <div className="row home-header">
          <HeaderCenterfold centerfoldData={this.centerfoldData} />
        </div>
        <div className="row upcoming-shows-container">
          <UpcomingShows />
        </div>
      </div>
    );
  }
}
