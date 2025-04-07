import React, { useState } from "react";

const products = [
  { id: 1, name: "Burger", price: 5 },
  { id: 2, name: "Pizza", price: 8 },
  { id: 3, name: "Pasta", price: 7 },
];

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart array
  };

  return (
    <div>
      <h2>🍔 Food Menu</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} 
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>🛒 Cart</h2>
      <ul>
        {cart.length > 0 ? (
          cart.map((item, index) => <li key={index}>{item.name} - ${item.price}</li>)
        ) : (
          <p>Cart is empty</p>
        )}
      </ul>
    </div>
  );
};

export default AddToCart;
