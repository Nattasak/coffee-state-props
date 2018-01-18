import React from 'react';
import "./Logo.css";
import starbucks from "./starbucks.png";
import coffeeworld from "./coffeeworld.png";

const Logo = ({ brand }) => {

  let brandImg;

  if (brand === 'starbucks') {
    brandImg = <img src={starbucks} alt="Starbucks" />
  } else if (brand === 'coffeeworld') {
    brandImg = <img src={coffeeworld} alt="Coffee World" />
  }

  return(
    <div className="Logo">
      Logo: {brand}
      <div className="brandimg">{brandImg}</div>
    </div>
  );
}

export default Logo;
