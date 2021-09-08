import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./screens/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomeScreen />
    </BrowserRouter>
  );
}

export default App;
