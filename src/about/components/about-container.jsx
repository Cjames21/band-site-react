import React from 'react';
import Slider from './components/slider.jsx';
import SliderNav from './components/slider-nav.jsx';

export default class AboutContainer extends React.Component {

  render() {
    return (
      <div className="cd-hero js-cd-hero js-cd-autoplay">
        <Slider />
        <SliderNav />
      </div>
    );
  }
}
