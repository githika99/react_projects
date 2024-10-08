import React from "react";

const Event = (props) => {
  const handleClick = () => {
    console.log("Clicked:", props.title);
    console.log("Current samosa count:", props.samosa);
    console.log("Current multipler:", props.multipler);
    const numSamosas = parseInt(props.num_samosas);
    if (props.samosa >= numSamosas) {
      props.setSamosa(props.samosa - parseInt(props.num_samosas));
      props.setMultipler(props.multipler * props.mult);

      // ----- here we call the passed function from the parent component which will add Customer order to the array
      let packCount = parseInt(props.num_samosas);
      let str = `You packed ${packCount} samosas for ${props.title}!`;
      props.addSamosaPacksToArray(str);
    }
  };

  return (
    <div className={"Event"} onClick={handleClick}>
      <h3>{props.title}</h3>
      <h5>{props.mult}x per click </h5>
      <h4>{props.num_samosas} Samosas</h4>
    </div>
  );
};

export default Event;
