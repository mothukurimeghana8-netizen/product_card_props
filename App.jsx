import React, { useState } from "react";
import ProductCard from "./Product";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Store</h1>

      <h2>Cart Count: {cartCount}</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          name="Laptop"
          price={50000}
          image="https://placehold.co/150x150?text=Laptop"
          addToCart={addToCart}
        />

        <ProductCard
          name="Mobile"
          price={20000}
          image="https://placehold.co/150x150?text=Mobile"
          addToCart={addToCart}
        />

        <ProductCard
          name="Headphones"
          price={2000}
          image="https://placehold.co/150x150?text=Headphones"
          addToCart={addToCart}
        />

        <ProductCard
          name="Watch"
          price={3000}
          image="https://placehold.co/150x150?text=Watch"
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default App;
