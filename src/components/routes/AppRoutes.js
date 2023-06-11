import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../interface/Home';
import AboutUs from '../about/AboutUs';
import Reserve from '../reservations/Reserve';
import Contact from '../about/Contact';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/story' element={<AboutUs />} />
                <Route path='/reserve' element={<Reserve />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default AppRoutes;