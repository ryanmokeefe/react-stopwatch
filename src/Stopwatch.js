import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      paused: true,
      // currentTimeout: window.setTimeout(this.handleStart, 1000)
    }
    this.handlePause = this.handlePause.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  // resetInterval() {
  //   clearInterval(this.currentInterval)
  //   this.setState({
  //     currentInterval: null
  //   })
  // }

  componentDidMount(props) {
    this.setState({
      counter: this.state.counter,
      currentTimeOut: window.setTimeout(this.handlePause, 1000)
    })

}

componentWillReceiveProps () {
    clearTimeout(this.state.currentTimeout)
    this.setState({
      counter: this.state.counter,
      currentTimeout: window.setTimeout(1000)
    })
  }


  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={(e) => this.props.handleReset(e)}>Reset</button>
          <button onClick={(e) => this.props.handleStart(e)}>Start</button>
          <button onClick={(e) => this.props.handlePause(e)}>Pause</button>
        </div>
      </div>
    );
  }

  handleIncrement() {
    
  }

  handleStart(e) {
    clearTimeout(this.state.currentTimeout)
    this.setState(prevState => ({
      currentTimeout: window.setTimeout(this.handleStart, 1000),
      counter: prevState.counter + 1,
    })) 
    console.log('start firing')
  }

  handlePause(e) {
    clearTimeout(this.state.currentTimeout)    
    this.setState({
      // paused: true,
      currentTimeout: 0,
      currentInterval: this.state.counter
    })
    console.log('pause firing')
    
  }

  handleReset(e) {
    clearTimeout(this.state.currentTimeout)    
    this.setState({
      counter: 0,
      currentInterval: 0,
      currentTimeout: 0
    })
    console.log('reset firing')
    
  }



  // render() {
  //   return (
  //     <div className="stopwatch">
  //       <h1>{this.state.counter}</h1>
  //       <div className="controls">
  //         <button onClick={ e => this.props.handleReset(e)}>Reset</button>
  //         <button onClick={ e => this.props.handleStart(e)}>Start</button>
  //         <button onClick={ e => this.props.handlePause(e)}>Pause</button>
  //       </div>
  //     </div>
  //   );
  // }
}

export default Stopwatch;
