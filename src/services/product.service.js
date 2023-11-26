export const fetchProductData = async () => {
  const response = await fetch("https://fakestoreapi.com/products").catch(
    (error) => {
      return {
        status: "error",
        data: error,
      };
    }
  );
  const productData = await response.json();

  return {
    status: "success",
    data: productData,
  };
};
