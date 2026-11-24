import React from "react";

function ProductCard({ name, price, image, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        width: "180px",
        margin: "10px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <img
        src={image}
        alt={name}
        width="150"
        height="150"
      />

      <h3>{name}</h3>

      <p>Price: ₹{price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
