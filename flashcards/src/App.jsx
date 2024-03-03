import { useState, useEffect } from 'react'
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

  const [display, setDisplay] = useState(arr[card]["side1"])


  function handleClick2(){ 
    console.log("card flipped, handleClick2");
    setDisplay(prevDisplay => {
        return prevDisplay === arr[card]["side1"] ? arr[card]["side2"] : arr[card]["side1"];
      });
  }

  function arrowClick(){ 
    console.log("arrow pressed");
    setCard((prevCard) => {                       //before, we had this setCard((prevCard) => (prevCard + 1) % total);
      const newCard = (prevCard + 1) % total;     //that function implicitly returns the new card
      console.log("card is now", newCard);        //it also knows that the parameter is prevCard, even if we don't call it that
      setDisplay(arr[newCard]["side1"]);
      return newCard;                             //this line actually changes the value of card
    });
  }


  return (
    <>
    <h1>Human Perception: Visual and Auditory</h1>
    <h3>Learn all about our visual and auditory sensory perception. This study guide does not heavily delve into the neural aspects of these processes.</h3>

    {/* we need to include card here. so that when card changes, display changes*/}
    <div className = "FlashCard" onClick = {handleClick2}> 
      <h2>{display}</h2>
    </div>

    <img className = 'NextButton' src = 'src/assets/arrow.png' onClick = {arrowClick}></img> 
    
    </>
  )
}

export default App
