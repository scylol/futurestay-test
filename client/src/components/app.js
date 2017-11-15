import React from 'react';
import { connect } from "react-redux";
import {fetchWeather} from '../actions/actions';




export class App extends React.Component {
  

  componentDidMount() {
    this.props.dispatch(fetchWeather());
  
  }



  render() {
    // const weather = this.props.weatherArray.list.map((weather, index) => (
    //   <li key={index} className="topic-item">
    //     {weather}
    //   </li>
    // ));
    return (
        <div className="App">
        
        <select>
        <option value='Tuesday'>{this.props.weatherArray[0].main.temp} </option>
        </select>
        
      
            
            
        </div>
      );
  }
}

const mapStateToProps = state => ({
 weatherArray: state.weatherArray
});

export default connect(mapStateToProps)(App);
