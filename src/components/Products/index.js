import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        width: "80%",
      }}
    >
      {products.map((productItem) => (
        <div
          key={productItem.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            src={productItem.thumbnail}
            alt={productItem.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{productItem.title}</span>
            <b>$ {productItem.price}</b>
          </div>

          <button
            style={{
              padding: 5,
              border: 0,
              borderRadius: 5,
              backgroundColor: "green",
              color: "white",
            }}
          >
            Add to Cart
          </button>

          <button
            style={{
              padding: 5,
              border: 0,
              borderRadius: 5,
              backgroundColor: "red",
              color: "white",
            }}
          >
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
