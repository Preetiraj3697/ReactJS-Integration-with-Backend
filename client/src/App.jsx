import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEntry from "./components/AddEntry";
import AllUser from "./components/AllUser";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllUser />}></Route>
        <Route path="/addentry" element={<AddEntry />}></Route>
      </Routes>
    </div>
  );
}

export default App;
