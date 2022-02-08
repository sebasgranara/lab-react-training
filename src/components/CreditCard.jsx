import React from 'react';
import './CreditCard.css'

function CreditCard ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
})  {
  const style={
    backgroundColor:bgColor,
    color:color
  }

  const types={
    "Master Card":"master-card.svg",
    "Visa":"visa.png"
  }

  const selectedType=types[type];
  
  const logo= require(`../assets/images/${selectedType}`).default;
  // console.log(logo);

  const lastNumbers= number.substring(12,16);
  const hidden="**** **** ****";
  const month= ("0"+expirationMonth).slice(-2);
  const year= expirationYear.toString().substring(2,4);
  return <div className="CreditCard" style={style}>
      <img src={logo} alt={"logo "+type}/>
      <span>{hidden} {lastNumbers}</span>
      <span>Expires: {month}/{year} {bank}</span>
      <span>{owner}</span>
  </div>;
};

export default CreditCard;

