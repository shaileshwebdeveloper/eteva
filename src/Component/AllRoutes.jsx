import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "../Pages/ProductList";
import { ProductDetail } from "../Pages/ProductDetail";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
    </Routes>
  );
};
