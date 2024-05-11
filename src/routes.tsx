import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { URLs } from './_data_/urls';

import Booking from './pages/booking'
import Catalog from './pages/catalog'
import Iteminfo from './pages/info';

export const PageRoutes = () =>(
    <Routes>
        <Route path ="/my" element={<Catalog/>} />
        <Route path ="/my/booking" element={<Booking/>} />
        <Route path ="/my/itemDetail" element={<Iteminfo/>} />
        
        <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
)