export const fetchProductData = async () => {
  const response = await fetch("https://fakestoreapi.com/products_");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
};
