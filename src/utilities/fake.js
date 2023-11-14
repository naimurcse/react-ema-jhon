// Add to local storage
const addToLocalStorage = (id) => {
   const shoppingCart = getDataFromLocalStorage();
   let quantity = shoppingCart[id];
   if (quantity) {
      shoppingCart[id] = quantity + 1;
   } else {
      shoppingCart[id] = 1;
   }

   localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// To get data from local storage
const getDataFromLocalStorage = () => {
   let shoppingCart = {};
   let storedCart = localStorage.getItem("shopping-cart");
   if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
   }
   return shoppingCart;
};

export { getDataFromLocalStorage, addToLocalStorage };
