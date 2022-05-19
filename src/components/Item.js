import React, { useState } from "react";

function Item({ name, category }) {
  const handleClickBtn = () => {
    setinCart((inCart) => !inCart);
  };

  const [inCart, setinCart] = useState(false);

  const classStyle = inCart ? "in-cart" : "";
  return (
    <li className={classStyle}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClickBtn} className={inCart ? "remove" : "add"}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
