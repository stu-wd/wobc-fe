import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./state/authContext";
import { BikesProvider } from "./state/bikesContext";
import { LayoutProvider } from "./state/layoutContext";
// import dotenv from "dotenv";
// revisit and do a better job with wrapping

ReactDOM.render(
  <AuthProvider>
    <LayoutProvider>
      <BikesProvider>
        <Router>
          <App />
        </Router>
      </BikesProvider>
    </LayoutProvider>
  </AuthProvider>,
  document.getElementById("root")
);
