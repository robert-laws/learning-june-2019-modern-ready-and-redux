import React from 'react';

const seasonConfig = {
  summer: {
    text: "It's hot outside!",
    iconName: 'sun'
  },
  winter: {
    text: "Brrr, it's cold!",
    iconName: 'snowflake'
  }
}

export default class SeasonDisplay extends React.Component {
  state
  getSeason = (lat, month) => {
    if (month > 3 && month < 9) {
      return lat > 0 ? 'summer' : 'winter'
    } else {
      return lat > 0 ? 'winter' : 'summer'
    }
  }

  getMonth = () => {
    return new Date().getMonth();
  }

  displaySeason = () => {
    let season = this.getSeason(this.props.lat, this.getMonth())
    let { text } = seasonConfig[season];
    return text;
  }

  getIcon = () => {
    let season = this.getSeason(this.props.lat, this.getMonth());
    let { iconName } = seasonConfig[season];
    return iconName
  }

  render() {
    return (
      <div>
        <i className={`${this.getIcon()} icon`} />
        <h1>Season Display: {this.displaySeason()}</h1>
        <i className={`${this.getIcon()} icon`} />
      </div>
    ) 
  }
}