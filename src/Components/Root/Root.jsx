import React from 'react';
import { Outlet } from 'react-router';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;