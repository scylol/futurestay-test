import React from 'react';
import { connect } from "react-redux";
import {fetchWeather} from '../actions/actions';
import Temp from './temp';




export class App extends React.Component {
  

  componentWillMount() {
    this.props.dispatch(fetchWeather());
  }



  render() {
    
    return (
        <div className="App">
        
       <Temp />
        
      
            
            
        </div>
      );
  }
}

const mapStateToProps = state => ({
 weatherArray: state.weatherArray
});

export default connect(mapStateToProps)(App);
