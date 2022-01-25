import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./state/authContext";
import { BikesProvider } from "./state/bikesContext";
import { BikeFormProvider } from "./state/Bikes/bikeFormContext";
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
