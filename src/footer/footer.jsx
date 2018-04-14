import React from 'react';
import StorePanel from '../components/store-panel.jsx';

export default class Footer extends React.Component {

  render() {
    return (
      <div className="extended row footer">
        <div className="large-4 medium-4 small-12 columns">

        </div>
        <div className="large-4 medium-4 small-12 columns">
          <StorePanel />
        </div>
        <div className="large-4 medium-4 small-12 columns">

        </div>
      </div>
    );
  }
}
