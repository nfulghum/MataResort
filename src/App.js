import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/interface/Navigation';
import AppRoutes from './components/routes/AppRoutes';
import AppFooter from './components/interface/AppFooter';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
      <AppFooter />
    </BrowserRouter>
  );
}

export default App;
