import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

const initialState = {
  card: {
    suitList: "",
    numberList: ""
  }
}

const suitArr = ["spades", "hearts", 'diamonds', "clubs"];
const numberArr = ["ace", "king", "queen", "jack", "ten", "nine", "eight", "seven", "six", "five", "four", 'three',"two"];

const CardFrom = (props) => {// component stateless

  const [state, setState] = useState(initialState);
  const [checkSuitState, setCheckSuitState] = useState(
    new Array(4).fill(false)
  );
  const [checkNumberState, setCheckNumberState] = useState(
    new Array(13).fill(false)
  );

  const onSubmit = (e) => {
    e.preventDefault();

    let suitList = "";
    const list1 = checkSuitState.map((item, index) => {
      if(item) {
        if (suitList !== ""){
          suitList = suitList.concat(",").concat(suitArr[index]);
        }else{
          suitList = suitList.concat(suitList).concat(suitArr[index]);
        }
      }      
    })
    let numberList = "";
    const list2 = checkNumberState.map((item, index) => {
      if(item) {
        if (numberList !== ""){
          numberList = numberList.concat(",").concat(numberArr[index]);
        }else{
          numberList = numberList.concat(numberArr[index]) 
        }
      }      
    })

    const newState = {...state, card: {
        suitList: suitList,
        numberList: numberList
      }
    } 
    setState(newState);

    suitList && numberList ? 
    props.dispatch(fetchRandom(newState)) :
    alert("you must choose at least one suit and one number ")

  };

  const suitOnChange = (e, idx) =>{
    e.preventDefault();
    const updatedCheckedState = checkSuitState.map((item, index) =>
      index === idx ? !item : item
    );

    setCheckSuitState(updatedCheckedState);
     
  }

  const cardOnChange = (e, idx) =>{
    e.preventDefault();
    const updatedCheckedState = checkNumberState.map((item, index) =>
      index === idx ? !item : item
    );

    setCheckNumberState(updatedCheckedState);
  };

  return <div>
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <p>Choose suits to be included:</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="spades" checked={checkSuitState[0]} onClick={(e) => suitOnChange(e, 0)}/> Spades (♠)
            </td>
            <td>
              <input type="checkbox" name="hearts" checked={checkSuitState[1]} onChange={(e) => suitOnChange(e, 1)}/> Hearts (♥)
            </td>
            <td>
              <input type="checkbox" name="diamonds" checked={checkSuitState[2]} onChange={(e) => suitOnChange(e, 2)}/> Diamonds (♦)
            </td>
            <td>
              <input type="checkbox" name="clubs" checked={checkSuitState[3]} onChange={(e) => suitOnChange(e, 3)}/> Clubs (♣)
            </td>
          </tr>
          <tr>
            <p>Choose suits to be included:</p>
          </tr>
          <tr>
            <td>
                <input type="checkbox" name="ace" checked={checkNumberState[0]} onChange={(e) => cardOnChange(e, 0)}/> Aces
            </td>
            <td>
                <input type="checkbox" name="king" checked={checkNumberState[1]} onChange={(e) => cardOnChange(e, 1)}/> Kings
            </td>
            <td>
              <input type="checkbox" name="queen" checked={checkNumberState[2]} onChange={(e) => cardOnChange(e, 2)}/> Queens
            </td>
            <td>
              <input type="checkbox" name="jack" checked={checkNumberState[3]} onChange={(e) => cardOnChange(e, 3)}/> Jacks
            </td>
          </tr>
          <tr>
            <td>
                <input type="checkbox" name="ten" checked={checkNumberState[4]} onChange={(e) => cardOnChange(e, 4)}/> Tens
            </td>
            <td>
                <input type="checkbox" name="nine" checked={checkNumberState[5]} onChange={(e) => cardOnChange(e, 5)}/> Nines
            </td>
            <td>
              <input type="checkbox" name="eight" checked={checkNumberState[6]} onChange={(e) => cardOnChange(e, 6)}/> Eights
            </td>
            <td>
              <input type="checkbox" name="seven" checked={checkNumberState[7]} onChange={(e) => cardOnChange(e, 7)}/> Sevens
            </td>
          </tr>
          <tr>
            <td>
                <input type="checkbox" name="six" checked={checkNumberState[8]} onChange={(e) => cardOnChange(e, 8)}/> Sixes
            </td>
            <td>
                <input type="checkbox" name="five" checked={checkNumberState[9]} onChange={(e) => cardOnChange(e, 9)}/> Fives
            </td>
            <td>
              <input type="checkbox" name="four" checked={checkNumberState[10]} onChange={(e) => cardOnChange(e, 10)}/> Fours
            </td>
            <td>
              <input type="checkbox" name="three" checked={checkNumberState[11]} onChange={(e) => cardOnChange(e, 1)}/> Threes
            </td>
          </tr>
          <tr>
          <td>
              <input type="checkbox" name="two" checked={checkNumberState[12]} onChange={(e) => cardOnChange(e, 12)}/> Twos
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" disabled={props.loading}>
        Submit
      </button>
    </form>
  </div>
}


const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPros)(CardFrom)
