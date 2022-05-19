import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [appClass, setappClass] = useState(false);
  // ;
  const handleClick = () => {
    setappClass((appClass) => !appClass);
  };
  const classNameStyle = appClass ? "App dark" : "App light";
  return (
    <div className={classNameStyle}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {appClass ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
