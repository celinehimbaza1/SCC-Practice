import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <div>
      <nav className="bg-gray-900 p-4 flex justify-between items-center text-white shadow-md">
  <h1 className="text-xl font-bold tracking-wide">📘 User Directory</h1>
  <div className="space-x-4">
    <Link to="/users/1" className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 pb-1">User 1</Link>
    <Link to="/users/2" className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 pb-1">User 2</Link>
    <Link to="/users/3" className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 pb-1">User 3</Link>
  </div>
</nav>


        <Routes>
          <Route path="/" element={<p className="p-4 text-lg">Welcome! Click a user.</p>} />
          <Route path="/users/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
