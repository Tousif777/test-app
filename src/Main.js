import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Map from './components/Map';

const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<div>Not Found</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Main