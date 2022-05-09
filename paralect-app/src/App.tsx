import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { DivApp } from './appStyles';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <DivApp>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
        {/* <Route path="/:userID" element={<User/>}></Route>
        <Route path="*" element={<Notfound404 />}></Route> */}
      </Routes>
    </DivApp>
  );
}

export default App;
