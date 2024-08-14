import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider
import App from "./App";
import Layout from "./Components/home/Layout";
// import Delete from "./Components/home/Delete";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      {" "}
      {/* Replace with your client ID */}
      <BrowserRouter>
        <App />
        {/* <Delete /> */}
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
