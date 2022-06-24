import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <>
        <Slider {...settings}>
          <div>
            <h3>{this.props.profile.name}</h3>
          </div>
          <div>
            <img src={this.props.profile.avatar_url} alt='error' />
          </div>
          <div>
            <h3>{this.props.profile.bio}</h3>
          </div>
          <div>
            <h3>{this.props.profile.company}</h3>
          </div>
        </Slider>
      </>
    );
  }
}