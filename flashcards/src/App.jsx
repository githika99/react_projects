import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  const total = 10;
  const [card, setCard] = useState(0)

  const arr = [
    { id: 0, side1: 'question 0', side2: "answer 0"},
    { id: 1, side1: 'question 1', side2: "answer 1"},
    { id: 2, side1: 'question 2', side2: "answer 2"},
    { id: 3, side1: 'question 3', side2: "answer 3"},
    { id: 4, side1: 'question 4', side2: "answer 4"},
    { id: 5, side1: 'question 5', side2: "answer 5"},
    { id: 6, side1: 'question 6', side2: "answer 6"},
    { id: 7, side1: 'question 7', side2: "answer 7"},
    { id: 8, side1: 'question 8', side2: "answer 8"},
    { id: 9, side1: 'question 9', side2: "answer 9"},
  ]


  function arrowClick(){ //make this a parameter value
    console.log("arrow pressed");
    setCard((prevCard) => (prevCard + 1) % total);
    console.log("card is now", card);
  }


  return (
    <>
    <h1>Human Perception: Visual and Auditory</h1>
    <h3>Learn all about our visual and auditory sensory perception. This study guide does not heavily delve into the neural aspects of these processes.</h3>

    <Card side1 = {arr[card]['side1']} side2 = {arr[card]['side2']}></Card>

    <img className = 'NextButton' src = 'src/assets/arrow.png' onClick = {arrowClick}></img> 
    
    </>
  )
}

export default App
