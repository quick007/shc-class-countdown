import React, { useState } from "react"

function theTime() {
  const d = new Date();
  if (d.getHours() > 12) {
    var hrs = (d.getHours() - 12)
    var am = false;
  } else if (d.getHours() == 12) {
    var am = false;
  } else {
    var hrs = (d.getHours())
    var am = true;
  }
  const secs = (d.getSeconds() > 9 ? d.getSeconds() : "0" + d.getSeconds())
  const mins = (d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes())
  return hrs + ":" + mins + ":" + secs + " " + (am ? "am" : "pm");
}

export default class Timer extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { seconds: theTime() };
    }
  
    tick() {
      this.setState(({
        seconds: theTime()
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return React.createElement(
        'div',
          null,
          this.state.seconds
      );
    }
  }
  
