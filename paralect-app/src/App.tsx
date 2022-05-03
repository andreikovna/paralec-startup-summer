import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
        {/* <Route path="/:userID" element={<User/>}></Route>
        <Route path="*" element={<Notfound404 />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
