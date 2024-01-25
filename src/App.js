import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}

export default App;
