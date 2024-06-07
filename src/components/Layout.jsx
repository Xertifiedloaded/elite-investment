import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/signup') {
        return (
            <Outlet />
        );
    }

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
