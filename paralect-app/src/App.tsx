import React from 'react';

import './App.css';
import { DivApp } from './app.styled';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <DivApp>
      <Header />
      <MainPage />
    </DivApp>
  );
}

export default App;
