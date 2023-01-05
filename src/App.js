import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarsList from "./cars/CarsList";
import Layout from "./layout";
import CreateCar from "./cars/CreateCar";
import Car_view from "./cars/car view/Car_view";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<CarsList />} />
            <Route path="/createCars" element={<CreateCar />} />
            <Route path="/viewcar/:id" element={<Car_view />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
