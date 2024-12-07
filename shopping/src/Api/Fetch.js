export const getAllProducts = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json()) // Parse the JSON response
    .then((data) => data) // Return the parsed data
    .catch((error) => {
      console.error("Error fetching products:", error); // Handle any errors
    });
};
