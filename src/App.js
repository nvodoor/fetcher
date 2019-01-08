import React, { Component } from 'react';
import AlertDiv from './AlertDiv';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }

    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert() {
    alert('This div has been clicked.')
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <AlertDiv alert={this.handleAlert}/>
      </div>
    );
  }
}

export default App;
