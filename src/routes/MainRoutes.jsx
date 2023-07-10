import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/mainpage/MainPage';
import AboutPage from '../pages/aboutpage/AboutPage';
import FavoritePage from '../pages/favoritepage/FavoritePage';
import ServicesPage from '../pages/servicespage/ServicesPage';
import ContactPage from '../pages/contactpage/ContactPage';
import DeteilPage from '../pages/deteilpage/DeteilPage';
import Abouttwo from '../pages/aboutpage/Abouttwo';
import LoginPage from '../pages/loginpage/LoginPage';
import AdmiPage from '../pages/adminpage/AdmiPage';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/abouttwo" element={<Abouttwo />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details/:id" element={<DeteilPage />} />
        <Route path="/admin" element={<AdmiPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
