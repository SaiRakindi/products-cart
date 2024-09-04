import React, { useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;

  const [total, setTotal] = useState(0);

  const changeQuantity = (id, quantity) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%",
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>Subtotal: $ {total}</b>

      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <div
            key={cartItem.title}
            style={{
              display: "flex",
              padding: 10,
              border: "1px solid grey",
              margin: 5,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img
                src={cartItem.thumbnail}
                alt={cartItem.title}
                style={{ width: 70, objectFit: "cover" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <span>{cartItem.title}</span>
                <b>$ {cartItem.price}</b>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button
                onClick={() =>
                  changeQuantity(cartItem.id, cartItem.quantity - 1)
                }
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() =>
                  changeQuantity(cartItem.id, cartItem.quantity + 1)
                }
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ padding: 20, alignSelf: "center" }}>Cart is empty</span>
      )}
    </div>
  );
};

export default Cart;
