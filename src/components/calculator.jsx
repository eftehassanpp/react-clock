import React from 'react';
import convertTo from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
export default class TempCalculator extends React.Component {
  state = {
    temperature: 0,
    scale: 'c',
  };
  onChangeHandler = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celcius = scale === 'f' ? convertTo('c', temperature) : temperature;
    const farhenheit =
      scale === 'c' ? convertTo('f', temperature) : temperature;
    return (
      <>
        <TemperatureInput
          temperatureValue={celcius}
          scale="c"
          onChangeHandler={this.onChangeHandler}
        />
        <TemperatureInput
          temperatureValue={farhenheit}
          scale="f"
          onChangeHandler={this.onChangeHandler}
        />
        <BoilingVerdict temperature={celcius} />
      </>
    );
  }
}
