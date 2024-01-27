import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import HomePage from "./pages/home/HomePage";
import ProductShow from "./pages/product/ProductShow";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

function App() {
  return (
    <div className="App">
      <Header />
      {/*  <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/product/:id" exact element={<ProductShow />} />
        </Routes>
      </BrowserRouter> */}
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
