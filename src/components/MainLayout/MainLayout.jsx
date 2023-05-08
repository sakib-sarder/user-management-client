import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;