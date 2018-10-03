import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const operators = ['/', '*', '-', '+', '='];
const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];

const App = () => {
  return (
    <div className='calculator'>
      <CalculatorDisplay />
      <div className='bottom'>
        <div className='numbersContainer'>
          <ActionButton buttonStyle={'action'} text={'clear'}/>
          {numbers.map( numbers => {
            return <NumberButton buttonStyle={'numbers'} text={numbers}/>
          })}
          <ActionButton buttonStyle={'action'} text={'0'}/>
        </div>
        <div className='operatorContainer'>
          {operators.map( operators => {
            return <NumberButton buttonStyle={'operators'} text={operators}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;