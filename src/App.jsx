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

const App = () => {
    return (
        <div className="bg-secondary overflow-x-hidden">
            <div className={'min-h-screen'}>
                <Navbar />
                <Header />
            </div>
            <History />
            <TodaySpecial />
            <Chef />
            <VideoPlayer />
            <Laurels />
            <FindUs />
            <Footer />
        </div>
    );
};

export default App;
