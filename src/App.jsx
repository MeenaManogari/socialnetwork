import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Friends from "./components/friendslist/friends";
import Mediahead from "./components/HeaderContent/Header/header";

import Home from "./pages/home";

function App() {
  return (
    <>
      <div className="App">
        <Mediahead />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
