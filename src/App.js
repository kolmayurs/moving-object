import React, { Component } from 'react';
import './css/App.css';
import object from './img/object.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      totalcount : 0,
    }
    this.countClick =this.countClick.bind(this);
    this.totalClick =this.totalClick.bind(this);
  }
  countClick(){
    this.setState({count: this.state.count + 1})
  }
  totalClick(){
    this.setState({totalcount: this.state.totalcount + 1})
  }
  
  render() {
    return (
      <div onClick={this.totalClick.bind(this)} className="App">
      <h1>Total Clicks: {this.state.totalcount}</h1>
        <h1>Clicks on Target: {this.state.count}</h1>
        <h3> Clicks on Target: {Math.round(((this.state.count/this.state.totalcount)*100)* 100) / 100}</h3>
        <img onClick={this.countClick.bind(this)} src={object} />
      </div>
    );
  }
}

export default App;
