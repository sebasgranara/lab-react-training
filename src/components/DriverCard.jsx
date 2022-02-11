import React from 'react';
import "./DriverCard.css"

function DriverCard({ name, rating, img, car }) {
  const { model, licensePlate } = car;
  
  return (
    <div className="DriverCard">
      <img src={img} alt={img} />
      <div className="info">
        <span className="name">{name}</span>
        <span>{rating}</span>
        <span className="car">
          {model} - {licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
