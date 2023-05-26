import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { Navbar } from "./components";
import Auth from "./pages/Auth/Auth";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
