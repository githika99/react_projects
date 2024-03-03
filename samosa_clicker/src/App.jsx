import { useState } from 'react';
import Event from './components/Event';

import './App.css'


function App() {

  // function useState() {
  //   //reconciliation algorithm
  //   return [arg1, () => {}]
  // }

  const [samosa, setSamosa] = useState(0);

  const [multipler, setMultipler] = useState(1)

  function handleSamosa(){ //make this a parameter value
    console.log("Current multipler:", multipler);
    setSamosa(samosa + multipler);
  }

  return (
    <>
      <h1>Samosa Selector</h1>
      <img className= 'samosaObj' src="src/assets/samosa.png" onClick={handleSamosa} ></img>
      <h2>Count: {samosa}</h2>
      <div class = "Event_Wrapper">
        <Event title = 'Double Stuffed' mult = '2' num_samosas = '10' samosa = {samosa} setSamosa = {setSamosa} multipler = {multipler} setMultipler = {setMultipler}></Event>
        <Event title = 'Party Pack' mult = '5' num_samosas = '100' samosa = {samosa} setSamosa = {setSamosa} multipler = {multipler} setMultipler = {setMultipler}></Event>
        <Event title = 'Full Feast' mult = '10' num_samosas = '1000' samosa = {samosa} setSamosa = {setSamosa} multipler = {multipler} setMultipler = {setMultipler}></Event>
      </div>
    </>
  )
}

export default App
