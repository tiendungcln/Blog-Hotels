import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, } from "react-router-dom";
import "./index.css";
import router from "./router/router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
