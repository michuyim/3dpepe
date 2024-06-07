import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Page from './Page';

function App() {
  return (
      <Routes>
        <Route path='/' index element={<Page />} />
      </Routes>
  );
}

export default App;
