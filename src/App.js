import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <Header updateSearchResults={updateSearchResults} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<HomePage searchResults={searchResults} />}
          />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
