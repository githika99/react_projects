import { useState } from 'react';
import Event from './components/Event';

import './App.css'


function App() {

  // function useState() {
  //   //reconciliation algorithm
  //   return [arg1, () => {}]
  // }

  const [samosa, setSamosa] = useState(0);

  function handleSamosa(incrementBy){ //make this a parameter value
    setSamosa(samosa + incrementBy);
  }

  return (
    <>
      <h1>Samosa Selector</h1>
      <img className= 'samosaObj' src="src/assets/samosa.png" onClick={handleSamosa(1)} ></img>
      <h2>Count: {samosa}</h2>
      <Event title = 'Double Stuffed' mult = '2' num_samosas = '10' samosa = {samosa} setSamosa = {setSamosa}></Event>
      <Event title = 'Party Pack' mult = '5' num_samosas = '100' samosa = {samosa} setSamosa = {setSamosa}></Event>
      <Event title = 'Full Feast' mult = '10' num_samosas = '1000' samosa = {samosa} setSamosa = {setSamosa}></Event>
        
    </>
  )
}

export default App
