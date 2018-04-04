import React from 'react';
import Header from './components/header-container.jsx';

import './home.css';


export default class Home extends React.Component {

   centerfoldData = this.props.centerfoldData;

   render() {
     return (<div className="home-page">
              <Header centerfoldData={this.centerfoldData}/>
             </div>);
   }
}
