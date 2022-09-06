import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
