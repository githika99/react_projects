import React from 'react';
//import './App.css';

function AboutPage() {
	return (
    <div>
      <h1> about 2823 </h1>
      <h3> hi </h3>
      <Mypara num={555}/>
    </div>
	);
}

function Mypara({num}) {
  let num2 = num * 2 ;
	return (
    <div>
      <p> fsdfsdfsfsdsfsdfsdfsdfsfsfsdf dfsdfs 2823 </p>
      <h3> num2 value is  {num2} </h3>
    </div>
	);
}

export default AboutPage;
