import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/mainpage/MainPage';
import AboutPage from '../pages/aboutpage/AboutPage';
import FavoritePage from '../pages/favoritepage/FavoritePage';
import ServicesPage from '../pages/servicespage/ServicesPage';
import ContactPage from '../pages/contactpage/ContactPage';
import DeteilPage from '../pages/deteilpage/DeteilPage';
import LoginPage from '../pages/loginpage/loginpage';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details/:id" element={<DeteilPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
