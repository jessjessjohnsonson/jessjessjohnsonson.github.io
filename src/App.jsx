import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}