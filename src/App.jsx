import "./App.css";
import Home from "./components/home/home";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./components/Placeorder/PlaceOrder";

function App() {
  return (
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/placeorder" Component={PlaceOrder}/>
      </Routes>
  );
}

export default App;
