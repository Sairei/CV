import React from 'react';

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import MainPage from '../components/main/MainPage';

const AppRouter = () => {
  // Dans le return, il y a des '{/**/}'.
  // S'il y a ça à la fin d'un ligne, il s'agit d'une ligne faite pour corriger les problème de lien lié au fil d'arianne.

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            
          </Route>

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;