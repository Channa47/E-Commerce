export const getAllProducts = (url) => {
  return fetch(url)
    .then((res) => res.json()) // Parse the JSON response
    .then((data) => data) // Return the parsed data
    .catch((error) => {
      console.error("Error fetching products:", error); // Handle any errors
    });
};
