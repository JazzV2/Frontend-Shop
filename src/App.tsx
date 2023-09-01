import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import Store from "./components/store/Store";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
}

export default App;
