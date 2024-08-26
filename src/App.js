// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              onSidebarToggle={() => setIsSidebarOpen(true)}
              searchTerm={searchTerm}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchResults
              searchTerm={searchTerm}
              onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          }
        />
      </Routes>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Footer />
    </Router>
  );
};

export default App;
