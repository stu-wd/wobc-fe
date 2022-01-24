import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Contexts/authContext";
import { BikesProvider } from "./Contexts/bikesContext";
import { BikeFormProvider } from "./Contexts/Bikes/bikeFormContext";
// import dotenv from "dotenv";
// revisit and do a better job with wrapping

ReactDOM.render(
  <AuthProvider>
    <BikesProvider>
      <BikeFormProvider>
        <Router>
          <App />
        </Router>
      </BikeFormProvider>
    </BikesProvider>
  </AuthProvider>,
  document.getElementById("root")
);
