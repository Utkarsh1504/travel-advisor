import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "../pages/TourDetails";
import SearchResults from "./../pages/SearchResults";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import ThankYou from "../pages/ThankYou";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ty" element={<ThankYou />} />
      <Route path="/gallery" element={<MasonryImagesGallery />} />
      <Route path="/tours/search" element={<SearchResults />} />
    </Routes>
  );
};

export default Routers;
