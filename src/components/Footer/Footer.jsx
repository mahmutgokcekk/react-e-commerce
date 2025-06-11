import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { footerItemList } from './FooterItemList';
import { Link } from "react-router";
import SiteLogo from '../SiteLogo/SiteLogo';


function Footer() {
    return (
        <Container fluid className='mt-4 p-5 bg-light vh-50' style={{minHeight:"150px"}} >
            <Container > 
                <Row xs={1} md={2} className='justify-content-center align-items-center text-center' >
                    <Col className='mb-2'>
                        <SiteLogo/>
                    </Col>
                    <Col>
                        {footerItemList() && footerItemList().map((item, index) => (
                            <span className='fs-1 px-1' key={index}>
                                <a href={item.link} target='_blank' className='icon-link link-dark link-offset-2 link-opacity-100 link-opacity-75-hover'> {item.icon}</a>
                            </span>
                        ))}
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default Footer;