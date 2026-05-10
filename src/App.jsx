import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import Header from "./components/Header.jsx"
import "@fontsource/satisfy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from './pages/HomePage.jsx';
import OrderPage from './pages/OrderPage.jsx';
import SuccessPage from './components/SuccessPage.jsx';

export default function App() {
    const [orderResponse, setOrderResponse] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
        path="/order"
        element={
          <OrderPage setOrderResponse={setOrderResponse} />
        }
      />
      <Route
        path="/success"
        element={
          <SuccessPage orderResponse={orderResponse} />
        }
      />
      </Routes>
    </BrowserRouter>
  );
}
