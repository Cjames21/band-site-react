import React from 'react';

export default class ShowContainer extends React.Component {

  render() {
    return (
      <div className="row show-container">
        <div className="large-4 medium-4 small-4 columns">
          <h1 className="event-date">{this.props.event[0]}</h1>
          <h2 className="event-venue">{this.props.event[1]}</h2>
        </div>
        <div class="large-5 medium-5 small-5 columns">
          <h1 className="event-city">{this.props.event[2]}</h1>
        </div>
        <div className="large-3 medium-3 small-3 columns">
          <h1 className="ticket-link">Ticket button</h1>
        </div>
      </div>
    );
  }
}
