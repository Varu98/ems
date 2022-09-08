import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHome from '../Pages/AdminHome';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import UserProfile from '../Pages/UserProfile';
import RequiresAuth from './RequiresAuth';

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <RequiresAuth>
            <HomePage />
          </RequiresAuth>
        }
      />
      <Route path="user-profile" element={<UserProfile />} />
      <Route
        path="admin"
        element={
          <RequiresAuth>
            <AdminHome />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export default Router;
