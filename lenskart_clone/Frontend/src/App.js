import "./App.css";
import { Navigation } from "./Components/Home/Navigation";
import AllRouts from "./Components/Routes/AllRouts";

function App() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <AllRouts />
    </div>
  );
}

export default App;
