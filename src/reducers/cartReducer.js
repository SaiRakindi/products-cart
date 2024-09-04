export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id === action.payload.id
            ? (cartItem.quantity = action.payload.quantity)
            : cartItem.quantity
        ),
      };

    default:
      break;
  }
};
