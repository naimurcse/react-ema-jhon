// Add shopping cart to database
const addToDatabase = (id) => {
   let shoppingCart = getShoppingCart();

   let quantity = shoppingCart[id];
   if (quantity) {
      shoppingCart[id] = quantity + 1;
   } else {
      shoppingCart[id] = 1;
   }

   localStorage.setItem("cart", JSON.stringify(shoppingCart));
};

const removeFromDatabase = (id) => {
   let shoppingCart = getShoppingCart();
   if (id in shoppingCart) {
      delete shoppingCart[id];
   }
   localStorage.setItem("cart", JSON.stringify(shoppingCart));
};

// Get Shopping cart from database
const getShoppingCart = () => {
   let shoppingCart = {};
   let storedData = localStorage.getItem("cart");
   if (storedData) {
      shoppingCart = JSON.parse(storedData);
   }

   return shoppingCart;
};

// Delete shopping cart
const deleteShoppingCart = () => {
   localStorage.removeItem("shopping-cart");
};

export { getShoppingCart, removeFromDatabase, addToDatabase, deleteShoppingCart };
