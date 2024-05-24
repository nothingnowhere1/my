import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Booking from './pages/booking'
import Catalog from './pages/catalog'
import Info from './pages/info';
import { URLs } from './__data__/urls';

export const PageRoutes = () =>(
    <Routes>
        <Route path ={URLs.baseUrl} element={<Catalog/>} />
        <Route path ={URLs.booking} element={<Booking/>} />
        <Route path ={URLs.ui.itemDetail.url} element={<Info/>} />
        
        <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
)
