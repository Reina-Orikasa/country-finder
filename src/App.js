import React from "react";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Routes, Route } from "react-router-dom";
import { Search } from "./Search";

export function App() {
  return (
    <div className="dark:bg-gray-800 text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
