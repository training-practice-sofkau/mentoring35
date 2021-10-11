import React, { Component } from 'react'
import From from '../components/From'
import Result from '../components/Result'

class App extends Component {
  

  render() {
    return (
      <div>
        <h3>Lista Random</h3>
        <p>Sistema Ramdom - Demo</p>
        <From />
        <Result />
      </div>
    )
  }
}

export default App


