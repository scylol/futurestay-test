import React, { Component } from 'react';
import { connect } from 'react-redux';

class Temp extends Component {
    render() {
        console.log(this.props.weatherArray);
        let weather = this.props.weatherArray.map((weather, index) => {
            return (
              <li className="profile-box" key={index}>
                <h3>{weather.main.temp}</h3>
              </li>
            );
          });
        return(
            <div className="Temp">
            {weather}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    weatherArray: state.weatherArray
  });

export default connect(mapStateToProps)(Temp);