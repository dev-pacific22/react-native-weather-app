import React from "react";
import { Image } from "react-native";

const WeatherStatusImage = props => {
    let image;
    switch (props.icon) {
      case '01d':
      case '01n':
        image = require('../assets/img/sunny.png');
        break;
      case '02d':
      case '02n':
        image = require('../assets/img/sunny_s_cloudy.png');
        break;
      case '03d':
      case '03n':
        image = require('../assets/img/partly_cloudy.png');
        break;
      case '04d':
      case '04n':
        image = require('../assets/img/cloudy.png');
        break;
      case '09d':
      case '09n':
        image = require('../assets/img/rain.png');
        break;
      case '10d':
      case '10n':
        image = require('../assets/img/rain_s_cloudy.png');
        break;
      case '11d':
      case '11n':
        image = require('../assets/img/thunderstorms.png');
        break;
      case '13d':
      case '13n':
        image = require('../assets/img/snow.png');
        break;
      case '50d':
      case '50n':
        image = require('../assets/img/fog.png');
        break;
    }
    return   <Image style={imageStyle} source={image} />
};
const imageStyle = {
    width: 75,
    height: 75
  };


export { WeatherStatusImage };
