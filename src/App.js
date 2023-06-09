import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";
import Profile from "./components/profile";
import About from "./components/About";
import AddExpense from "./components/AddExpense";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/view-profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-expense" element={<AddExpense />} />
        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
