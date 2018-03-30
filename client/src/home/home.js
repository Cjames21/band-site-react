import React from 'react';
import Header from './components/header-container.jsx';

import './home.css';


export default class Home extends React.Component {
   render() {
     return (<div className="home-page">
              <Header />
             </div>);
   }
}
