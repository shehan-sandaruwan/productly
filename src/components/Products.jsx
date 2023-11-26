import React, { useEffect, useState } from "react";
import { fetchProductData } from "../services/product.service";
import ProductItem from "./ProductItem";
import { Grid } from "react-loader-spinner";

const Products = ({ onHandleAddItemsToCart }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetchProductData();
      setIsLoading(false);

      if (response.status === "success") {
        modelProductData(response.data);
      } else {
        alert(response.data);
      }
    };

    fetchData();
  }, []);

  const modelProductData = (products) => {
    if (products.length) {
      const modeledData = products.map((product) => {
        return {
          id: product.id,
          imageUrl: product.image,
          productName: product.title,
          description: product.description,
        };
      });

      setProductData(modeledData);
    }
  };

  return (
    <div className="product-container">
      {isLoading ? (
        <Grid
          height="80"
          width="80"
          color="#c834db"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperClass="loading-indicator"
          visible={true}
        />
      ) : (
        <>
          {productData.map((product) => {
            return (
              <ProductItem
                key={product.id}
                {...product}
                onHandleAddItemsToCart={onHandleAddItemsToCart}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Products;
