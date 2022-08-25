import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import ListPage from './pages/ListPage/ListPage';
import DetailPage from './pages/DetailPage/DetailPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/all" element={<ListPage />} />
        <Route path="/product/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
