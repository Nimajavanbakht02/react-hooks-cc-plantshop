import React, { useState } from "react";

function PlantCard({name, image, price}) {
  const [stockButton, setStockButton] = useState(true);
  const handleStockButton = (event) => {
    setStockButton(stockButton === true ? false : true)
  }


  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockButton ? (
        <button className="primary" onClick={(event) => handleStockButton(event)}>In Stock</button>
      ) : (
        <button onClick={(event) => handleStockButton(event)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;