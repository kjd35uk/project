import React, { Component } from 'react';
import './App.css';
import _ from 'lodash'

class Boxes extends Component {
  state = {
    redMarginLeft: 0,
    redMarginTop: 0,
    blueMarginLeft: 0,
    blueMarginTop: 0,
    redColour: 'red',
    blueColour: 'blue'
  }

  render() {
    return (
      <div className="container">
        <div className="box-container">
          <div className="box red" style={{marginTop: `${this.state.redMarginTop}px`, marginLeft: `${this.state.redMarginLeft}px`, backgroundColor: this.state.redColour}}>
            <span className="box-label">
            {`left: ${this.state.redMarginLeft} top: ${this.state.redMarginTop}`}
            </span>
          </div>
          <div className="box blue" style={{marginTop: `${this.state.blueMarginTop}px`, marginLeft: `${this.state.blueMarginLeft}px`, backgroundColor: this.state.blueColour}}>
            <span className="box-label">
            {`left: ${this.state.blueMarginLeft} top: ${this.state.blueMarginTop}`}
            </span>
          </div>
        </div>
        <button
          className="button shuffle"
          onClick={this.shuffle}>
          Shuffle!
        </button>
      </div>
    );
  }
  shuffle = () => {
    let colours = ['black', 'purple', 'green', 'red', 'blue', 'brown', 'hotpink']
    let redMarginTop = Math.floor(Math.random() * 99)
    let redMarginLeft = Math.floor(Math.random() * 250)
    let blueMarginTop = Math.floor(Math.random() * 99)
    let blueMarginLeft = Math.floor(Math.random() * 250)
    let redColour = _.sample(colours);
    let blueColour = _.sample(colours);
    this.setState({redMarginLeft, redMarginTop, blueMarginLeft, blueMarginTop, redColour, blueColour})
  }
}


export default Boxes;


/*
 
 Questions:

 1. perform TODO item in Boxes#shuffle method

 2. what can be done to make this more reusable
    as a component?
    
 3. what can be done to turn this into a
    production-ready product for sale?
    
 */


  
