import React, { useEffect } from "react";
import { useAuth } from "./state/authContext.js";
import { RouteTree } from "./routes/index.js";
import "./assets/styles/index.css";

const App = () => {
  return (
    <div className="app-container flex flex-col">
      <RouteTree />
    </div>
  );
};

export default App;
