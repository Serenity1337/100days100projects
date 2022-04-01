import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {StoreType} from './Redux/store'
import {GetRandomCatAction} from './Redux/actions/CatActions'
function App() {
  const dispatch = useDispatch()
  const catState = useSelector((state:StoreType) => state)
  const test = () => {
    dispatch(GetRandomCatAction)
  }
  return (
    <div className="App">
      <button onClick={test}>Generate cat picture</button>
      {catState.catReducer ? <div><img src={catState.catReducer} alt="" style={{width: '500px', height: '500px', display: 'block'}}/></div> : null}
      <div></div>
    </div>
  );
}

export default App;
