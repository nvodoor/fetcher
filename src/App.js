import React, { Component } from 'react';
import AlertDiv from './AlertDiv';
import Repos from './Repos';
import axios from 'axios';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props)
    const repos = props.repos ? props.repos : [
      {
        'name': 'Example Name',
        'size': 0,
        'stargazers_count': 0
      }
    ]
    this.state = {
      reps: repos,
      name: '',
    }

    this.handleAlert = this.handleAlert.bind(this);
    this.submitName = this.submitName.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  getRepos(name) {
    axios.get(`/repos/${name}`)
    .then(response => {
      this.setState({
        reps: response.data,
        name: ''
      })
    })
    .catch((err) => {
      console.log(`This is the error: ${err}`);
      this.setState({
        reps: [
          {
            'name': 'Example Name',
            'size': 0,
            'stargazers_count': 0
          }
        ],
        name: ''
      })
    })
  }

  updateName(e) {
    const newName = e.target.value;

    this.setState({
      name: newName
    })
  }

  submitName() {
    this.getRepos(this.state.name)
  }

  componentDidMount() {
    this.getRepos('amazon');
  }

  handleAlert() {
    alert('This div has been clicked.')
  }

  render() {
    const { reps, name } = this.state; 
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <AlertDiv alert={this.handleAlert}/>
        <label>Enter Username to Find Github Repo:</label>
        <input type="text" onChange={this.updateName} value={name} placeholder="Enter Name"/>
        <button type="text" onClick={this.submitName}>Submit Name</button>
          {reps.map((rep, id) => {
            return <Repos key={id} name={rep.name} size={rep.size} stargazers={rep.stargazers_count} />
            }
          )}
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  repos: PropTypes.array
}

export default App;
