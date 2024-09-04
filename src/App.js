import logo from "./logo.svg";
import "./App.css";
import { useEffect, useReducer } from "react";
import axios from "axios";

function App() {
  const [state, dispatch] = useReducer(cartReducer, { products: [], cart: [] });

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>Hello</div>;
}

export default App;
