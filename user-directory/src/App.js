import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile"; // ✅ Correct import path

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
          <Link to="/users/1" style={{ marginRight: "10px" }}>User 1</Link>
          <Link to="/users/2" style={{ marginRight: "10px" }}>User 2</Link>
          <Link to="/users/3">User 3</Link>
        </nav>

        <Routes>
          <Route path="/users/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
