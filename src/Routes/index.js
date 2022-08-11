import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../views/Login";
import Home from "../views/Home";

export default function Rutas() {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route path="/home" component={Home} />
        </Routes>
    </BrowserRouter>
  );
}
