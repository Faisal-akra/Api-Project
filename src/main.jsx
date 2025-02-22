import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Login from "./pages/Login";

import { Provider } from "react-redux";
import { myStore } from "./store/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import Fav from "./pages/Favourit";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

    
       <Provider store={myStore}>
        <ToastContainer/>
        <App />
      </Provider>
    </BrowserRouter>
   
   
  </StrictMode>
);
