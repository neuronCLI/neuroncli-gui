import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="p-6">
        <nav className="mb-6">
          <Link to="/" className="text-blue-500 text-xl">NeuronCLI Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
