import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Booking from './pages/booking'
import Catalog from './pages/catalog'
import Info from './pages/info';

export const PageRoutes = () =>(
    <Routes>
        <Route path ="/my" element={<Catalog/>} />
        <Route path ="/my/booking" element={<Booking/>} />
        <Route path ="/my/item" element={<Info/>} />
        
        <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
)