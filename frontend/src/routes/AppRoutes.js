import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import QueryPage from '../pages/QueryPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/query" element={<QueryPage />} />
        </Routes>
    );
};

export default AppRoutes;
