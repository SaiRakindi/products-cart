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

          {cart.some((product) => product.id === productItem.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: {
                    id: productItem.id,
                  },
                });
              }}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: productItem.id,
                    title: productItem.title,
                    thumbnail: productItem.thumbnail,
                    quantity: 1,
                    price: productItem.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
