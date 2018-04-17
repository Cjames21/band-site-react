import React from 'react';
import DesktopTopbar from './desktop-topbar.jsx';
import MobileTopbar from './mobile-topbar.jsx';

import './css/topbar.css';
import './css/mobile-topbar.css';
import './css/desktop-topbar.css';
import './css/navigation-menu.css';

export default class TopBar extends React.Component {

  topbarLinks = this.props.topbarLinks;

  // TODO: Implement desktop and mobile topbars here
  render() {
    return (
      <div>
        <DesktopTopbar onPageChange={ this.props.onPageChange }
                       topbarLinks={ this.topbarLinks } />
                     
        <MobileTopbar onPageChange={ this.props.onPageChange }
                      topbarLinks={ this.topbarLinks }
                      bandName={this.props.bandName} />
      </div>
    );
  }
}
