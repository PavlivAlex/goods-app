import React from 'react';

// helpers
import { routes } from './routes';

// components
import MainLayout from '../layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <MainLayout>
              <route.component />
            </MainLayout>
          }
        />
      ))}
    </Routes>
  );
};

export default Router;
