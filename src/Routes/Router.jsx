import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import UserProfile from '../Pages/UserProfile';

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="user-profile" element={<UserProfile />} />
    </Routes>
  );
};

export default Router;
