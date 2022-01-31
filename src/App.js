import { RouteTree } from "./routes/index.js";
import "./assets/styles/index.css";

const App = () => {
  return (
    <div className="app-container px-3 flex flex-col">
      <RouteTree />
    </div>
  );
};

export default App;
