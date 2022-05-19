import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory] = useState("All");
  console.log(selectedCategory);
  const itemsArr = Object.values(items);

  const newItemsArr =
    selectedCategory === "All"
      ? items
      : itemsArr.filter((food) => {
          return food.category === selectedCategory;
        });
  console.log(newItemsArr);
  const filteredItem = (e) => {
    setselectedCategory(e.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filteredItem}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItemsArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
