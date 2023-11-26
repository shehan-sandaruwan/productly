import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import Products from "./components/Products";

const App = () => {
  const [itemCount, setItemCount] = useState(0);

  // This function will be responsible for add and remove item from the cart
  const onHandleAddItemsToCart = (action) => {
    switch (action) {
      case "add":
        setItemCount((prevCount) => prevCount + 1);
        break;
      case "remove":
        {
          // only the itemCount greater than 0 , this allows to modify the count
          if (itemCount > 0) {
            setItemCount((prevCount) => prevCount - 1);
          }
        }
        break;

      default:
        break;
    }
  };
  return (
    <MainLayout itemCount={itemCount}>
      <Products onHandleAddItemsToCart={onHandleAddItemsToCart} />
    </MainLayout>
  );
};

export default App;
