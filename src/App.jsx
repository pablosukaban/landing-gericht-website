import React from 'react';
import {
    Header,
    Navbar,
    TodaySpecial,
    History,
    Chef,
    VideoPlayer,
    Laurels,
    FindUs,
    Footer,
} from './components/index.js';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="bg-secondary overflow-x-hidden">
            <Navbar />
            <Routes>
                <Route path="/" index={true} element={<Header />} />
                <Route path="/history" element={<History />} />
                <Route path="/special" element={<TodaySpecial />} />
                <Route path="/chef" element={<Chef />} />
                <Route path="/video" element={<VideoPlayer />} />
                <Route path="/laurels" element={<Laurels />} />
                <Route path="/find-us" element={<FindUs />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
        </div>
    );
};

export default App;
