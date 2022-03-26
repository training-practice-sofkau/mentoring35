import React, { Component } from 'react'
import CardFrom from '../components/CardFrom'
import Result from '../components/Result'

class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3>Random Card Drawer</h3>
        <p>Random system - Demo</p>
        <CardFrom />
        <Result />
      </div>
    )
  }
}

export default App


