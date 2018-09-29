import React, { Component } from 'react';
import "./Stopwatch.css";

class Stopwatchy extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            paused: true,
            currentTimeout: null
        }
    }



  updateTime() {
    this.setState({
      counter: this.state.counter + 1,
      paused: false,
    })
  }

  resetInterval() {
    clearInterval(this.state.currentTimeout)
    this.setState({    
      currentTimeout: null
    }) 
  
  }

  reset(e) {
    this.resetInterval()
    this.setState({
      counter: 0,
      paused: false,
    })
    console.log("reset firing")
  }

  start(e) {
    if(!this.state.currentTimeout) {
      this.setState({
        currentTimeout: setInterval(() => this.updateTime(), 1000)
      })
    }
    console.log("start firing")

  }

  pause(e) {
    console.log("pause firing")
    let paused = !this.state.paused
    if(paused) {
      this.resetInterval()
      this.setState({
        paused
      })
    } else {
      this.start()
    }
  }





  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={(e) => this.reset()}>Reset</button>
          <button onClick={(e) => this.start()}>Start</button>
          <button onClick={(e) => this.pause()}>Pause</button>
        </div>
      </div>
    );
  }

}

export default Stopwatchy;
