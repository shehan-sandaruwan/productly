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
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`product-item`}>
      <div className={`product-item-details ${isExpanded ? "expanded" : ""}`}>
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
          {isExpanded && <p className="collapsible-content">{description}</p>}
        </main>
      </div>
      <div onClick={onToggleDescription} className="toggle-button">
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
