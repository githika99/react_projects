import { useState } from "react";
import Event from "../components/Event";

import "../App.css";

// --------------------------------------------
function SamosaKitchen() {
  // function useState() {
  //   //reconciliation algorithm
  //   return [arg1, () => {}]
  // }

  const [samosa, setSamosa] = useState(0);

  const [multipler, setMultipler] = useState(1);

  const [samosaPacks, setSamosaPacks] = useState([]);

  // -------------------
  function handleSamosa() {
    //make this a parameter value
    console.log("Current multipler:", multipler);
    //console.log("---- samosaPacks:", samosaPacks);

    setSamosa(samosa + multipler);
  }

  // ----- this function will add the "customer Order text" to the array
  const addSamosaPacksToArray = (orderText) => {
    samosaPacks.push(orderText);
  };

  // ---- this function displays customer orders as soon as they are ready
  const DisplaySamosaOrderPacks = () => {
    return (
      <ul>
        {samosaPacks.map((orderText, index) => (
          <li key={index}>
            order #{index + 1}: {orderText}
          </li>
        ))}
      </ul>
    );
  };

  // ----------------------
  return (
    <>
      <h1>Samosa Kitchen...</h1>
      <DisplaySamosaOrderPacks />
      <img
        className="samosaObj"
        src="/assets/samosa.png"
        onClick={handleSamosa}
      ></img>
      <h2>Count: {samosa}</h2>
      <div class="Event_Wrapper">
        <Event
          title="Double Stuffed"
          mult="2"
          num_samosas="10"
          samosa={samosa}
          setSamosa={setSamosa}
          multipler={multipler}
          setMultipler={setMultipler}
          addSamosaPacksToArray={addSamosaPacksToArray}
        ></Event>
        <Event
          title="Party Pack"
          mult="5"
          num_samosas="100"
          samosa={samosa}
          setSamosa={setSamosa}
          multipler={multipler}
          setMultipler={setMultipler}
          addSamosaPacksToArray={addSamosaPacksToArray}
        ></Event>
        <Event
          title="Full Feast"
          mult="10"
          num_samosas="1000"
          samosa={samosa}
          setSamosa={setSamosa}
          multipler={multipler}
          setMultipler={setMultipler}
          addSamosaPacksToArray={addSamosaPacksToArray}
        ></Event>
      </div>
    </>
  );
}

export default SamosaKitchen;
