// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductFilter from "./components/ProductFilter";
import CategoryManager from "./components/CategoryManager";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"; // Import Sidebar component

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Header />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="flex">
        <div
          className={`flex-none w-64 bg-gray-100 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <ProductFilter />
        </div>
        <div className="flex-grow p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg"
          >
            {isSidebarOpen ? "Close" : "Filter"}
          </button>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/categories" element={<CategoryManager />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
