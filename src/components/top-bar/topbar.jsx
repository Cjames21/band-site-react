import React from 'react';
import DesktopTopbar from './desktop-topbar.jsx';
import MobileTopbar from './mobile-topbar.jsx';

import './css/topbar.css';
import './css/mobile-topbar.css';
import './css/desktop-topbar.css';

export default class TopBar extends React.Component {

  topbarLinks = this.props.topbarLinks;

  // TODO: Implement desktop and mobile topbars here
  render() {
    return (
      <div>
        <DesktopTopbar topbarLinks={ this.topbarLinks } />
        <MobileTopbar bandName={this.props.bandName} />
      </div>
    );
  }
}
