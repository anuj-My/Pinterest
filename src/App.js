import "./App.css";
import Home from "./pages/Home";
import Today from "./pages/Today";
import { monthCollection } from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const d = new Date();
const day = d.getDate();
const month = monthCollection[d.getMonth()];
const year = d.getFullYear();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/today"
          element={<Today day={day} month={month} year={year} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
