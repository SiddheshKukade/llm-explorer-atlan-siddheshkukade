import React from 'react'
import HomeView from '../HomeView/HomeView'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { Sidebar } from '../Sidebar/Sidebar';
import ModelPageView from '../ModelPageView/ModelPageView';
import CreateModel from '../CreateModel/CreateModel';

const AppView = () => {
    return (
        <Routes>
            <Route path="/create" element={<CreateModel />} />
            <Route path="/models/:modelId1/:modelId2" element={<ModelPageView />} />

            <Route path="/" element={<HomeView />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppView