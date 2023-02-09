import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./styles.css"
import Home from "./pages/home"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
