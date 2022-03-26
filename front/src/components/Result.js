import React from 'react'
import { connect } from 'react-redux';
const Result = (props) => {
  
  return <div>
     {props.result && 'Card generated: '+ props.result} 
  </div>
}


const stateMapToPros = state => {
  return {
    result: state.random.result?.card
  }
}


export default connect(stateMapToPros)(Result)
