import React from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

function SiteLayout() {
    return (
        <>
            <SiteHeader />
            <Container className='main-container'>
                <Outlet />
            </Container>
            <Footer />
            <ToastContainer />
        </>
    );  
}

export default SiteLayout;