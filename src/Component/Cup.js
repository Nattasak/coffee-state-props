import React from 'react';
import "./Cup.css";
import red from "./coffee-red.png";
import green from "./coffee-green.png";
import blue from "./coffee-blue.png";

const Cup = ({ color }) => {

  let cupImg;

  if (color === 'red') {
    cupImg = <img src={red} alt="Red" />
  } else if (color === 'green') {
    cupImg = <img src={green} alt="Green" />
  } else if (color === 'blue') {
    cupImg = <img src={blue} alt="Blue" />
  }

  return(
    <div className="Cup">
      Cup color: {color}
      <div className="cupimg">{cupImg}</div>
    </div>
  );
}

export default Cup;
