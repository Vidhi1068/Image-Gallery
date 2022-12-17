import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Gallery from "./components/Gallery";
import Cloth from "./components/Cloth";
import Mobile from "./components/Mobile";
import Jewellary from "./components/Jewellary";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route path="/Mobile" element={<Mobile />}></Route>
        <Route path="/Cloth" element={<Cloth />}></Route>
        <Route path="/Jewellary" element={<Jewellary />}></Route>
      </Routes>
    </>
  );
}

export default App;
