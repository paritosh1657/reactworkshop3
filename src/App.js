import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterState } from './Redux/slices/userSlice';
import { decrementCounter, resetCounter } from './Redux/slices/userSlice';
import CounterValue from './components/CounterValue';
import DemoA from './DemoA';
import DemoB from './DemoB';
import DemoC from './DemoC';
import { useCallback, useState } from 'react';
function App() {
  const [demoProp, setDemoProp]= useState("")
  const {testState, count}= useSelector((state)=> state.user);
  console.log(testState, "initial state");
  const dispatch= useDispatch();

  const handleIncrement= ()=>{
    dispatch(counterState());
  }

  const handleDecrement= ()=>{
    dispatch(decrementCounter());
  }
  const handleReset= ()=>{
    dispatch(resetCounter());
  }

  const handleDrilling =useCallback(()=>{

  }, [])
  // const handleDrilling =()=>{

  // }

  return (
    <div className="App">
      <h1>Redux toolkit</h1>
      <h3>{count}</h3>
      <button onClick={()=> handleIncrement()}>Increment</button>
      <button onClick={()=> handleDecrement()}>Decrement</button>
      <button onClick={()=> handleReset()}>Reset</button>

      <div>
        <h1>Value from new component</h1>
        <CounterValue />
      </div>

      <div>
        <button onClick={()=>setDemoProp("Drilled Prop")}>Click me</button>
        <DemoA handleDrilling={handleDrilling} />
        <DemoB handleDrilling={handleDrilling} />
        <DemoC handleDrilling={handleDrilling} />
      </div>
    </div>

  );
}

export default App;
