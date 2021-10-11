import React from 'react'
import { connect } from 'react-redux';
const Result = (props) => {
  return <div>
      Resultado: {props.result}
  </div>
}


const stateMapToPors = state => {
  return {
    result: state.random.result
  }
}


export default connect(stateMapToPors)(Result)
