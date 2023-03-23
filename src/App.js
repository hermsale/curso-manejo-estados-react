import React from 'react';
import './App.css';
import {UseState} from './UseState'
import {UseReducer} from './UseReducer'

function App() {
  return (
    <div className="App">
      <UseState
        name="UseState"
      />
      <UseReducer
      name="ClassState"
      />

    </div>
  );
}

export default App;
