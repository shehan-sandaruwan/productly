import React, { useState } from "react";
import { FaPlusCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProductItem = ({
  imageUrl,
  productName,
  description,
  onHandleAddItemsToCart,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggleDescription = () => {
    //setting toggle status. this keeps as a local state
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`product-item`}>
      <div className={`product-item-details`}>
        <div>
          <img
            src={imageUrl}
            alt="product item"
            className="product-display-img"
          />
        </div>
        <main className="item-action">
          <h5>{productName}</h5>
          <div>
            <button onClick={() => onHandleAddItemsToCart("add")}> + </button>
            <span>Add to Cart</span>
            <button onClick={() => onHandleAddItemsToCart("remove")}>
              {" "}
              -{" "}
            </button>
          </div>
          <p className={`collapsible-content ${isExpanded ? "visible" : ""}`}>
            {description}
          </p>
        </main>
      </div>
      <div
        onClick={onToggleDescription}
        className={`toggle-button ${isExpanded ? "expanded" : ""}`}
      >
        {isExpanded ? (
          <FaChevronUp className="toggle-icon" />
        ) : (
          <FaChevronDown className="toggle-icon" />
        )}
      </div>
    </div>
  );
};

export default ProductItem;
