import React from 'react';
import ShowContainer from './show-container,jsx';

class UpcomingShows extends React.Component {

  // This class is used exlusively on the home page and should therefore not
  // present more than four upcoming shows to the user. They can go to Tour
  // for more shows upcoming

  // This will eventually pull from a database
  // TODO: Create a database table containing all upcoming shows
  shows = [
    ['Sat 28 APR', 'Iron City', 'Jacksonville, FL, US', 'link-to-ticket-vendor'],
    ['Sat 28 APR', 'Iron City', 'Jacksonville, FL, US', 'link-to-ticket-vendor'],
    ['Sat 28 APR', 'Iron City', 'Jacksonville, FL, US', 'link-to-ticket-vendor'],
    ['Sat 28 APR', 'Iron City', 'Jacksonville, FL, US', 'link-to-ticket-vendor'],
  ];

  render() {
    return (
      <div className="row upcoming-shows">
        <h1>Upcoming Shows</h1>
        <ShowContainer event={shows[0]} />
        <ShowContainer event={shows[1]} />
        <ShowContainer event={shows[2]} />
        <ShowContainer event={shows[3]} />
      </div>
    );
  }
}
