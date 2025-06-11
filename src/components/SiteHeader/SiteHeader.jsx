import { useEffect, useState } from 'react';
import { Link } from "react-router";
import { useGetAllCategoriesQuery } from '../../redux/services/commerce';
import { FaBars } from 'react-icons/fa';
import SiteLogo from '../SiteLogo/SiteLogo';
import { headerLinkList } from './SiteHeaderLinkList';
import SearchBar from '../SearchBar/SearchBar';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import './SiteHeader.css';


function SiteHeader() {
    
    const { data: categories, error: err, isLoading: loading } = useGetAllCategoriesQuery();
    const [categoryNames, setCategoryNames] = useState([]);

    useEffect(() => {
        if (categories && !loading) {
            setCategoryNames([...categories]);
        }
    }, [categories, loading, err]);

    const [show, setShow] = useState(false);

    const toggleOffcanvas = () => setShow(!show);

    return (
        <>
            <Navbar expand="lg" className="bg-light py-3 shadow-sm mb-4">
                <Container>
                    <div className="d-flex align-items-center gap-3">
                        <FaBars size={24} className="d-lg-none" onClick={toggleOffcanvas} style={{ cursor: 'pointer' }} />
                        <Navbar.Brand className="d-flex align-items-center gap-1">
                            <SiteLogo />
                        </Navbar.Brand>
                    </div>

                    <div className="d-none d-lg-block w-50">
                        <SearchBar />
                    </div>

                    <div className="d-flex align-items-center">
                        {
                            headerLinkList().map((link, index) => (
                                <Link key={index} to={"/" + link.link} className="text-decoration-none text-black position-relative text-center me-4 header-link ">
                                    {link.icon}
                                    <div className="badge bg-danger position-absolute top-0 start-75 translate-middle " style={{ fontSize: '0.6rem' }}>{link.isHave}</div>
                                    <div className='d-none d-md-block' style={{ fontSize: '0.8rem' }}>{link.name}</div>
                                </Link>
                            ))
                        }
                    </div>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={toggleOffcanvas} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Kategoriler</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='m-0 p-0'>
                    <div className="d-lg-none mb-3 mx-3 mt-1">
                        <SearchBar closeCanvas={setShow} />
                    </div>
                    <Nav className="flex-column">
                        {
                            categoryNames && categoryNames.map((categoryName, index) => (
                                <Link onClick={() => setShow(false)} key={index} to={"/category/" + categoryName} className="header-link text-decoration-none w-100 align-items-center position-relative" >
                                    <p className='border p-3 m-0 text-black'>{categoryName.toUpperCase()}</p>
                                </Link>
                            ))
                        }
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );


    // return (
    //     <Navbar expand="md" className="bg-body-tertiary mb-4 py-3">
    //         <Container className='d-flex justify-content-between align-items-center '>
    //             <div className='d-flex align-items-center '>
    //                 <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className='me-2' />
    //                 <SiteLogo />
    //             </div>
    //             <div className='d-flex flex-grow-1 px-5 d-none d-md-block'>
    //                 <SearchBar />
    //             </div>
    //             <div>
    //                 <Navbar.Offcanvas
    //                     id={`offcanvasNavbar-expand-md`}
    //                     aria-labelledby={`offcanvasNavbarLabel-expand-md`}
    //                     placement="start"
    //                 >
    //                     <Offcanvas.Header closeButton className='align-items-center' >
    //                         <SearchBar />
    //                     </Offcanvas.Header>
    //                     <Offcanvas.Body className='p-0 m-0'>
    //                         <Nav className="justify-content-end flex-grow-1 d-md-none" >
    //                             {
    //                                 categoryNames && categoryNames.map((categoryName, index) => (
    //                                     <Link key={index} to={"/category/" + categoryName} className="header-link text-decoration-none d-block w-100 align-items-center position-relative" >
    //                                         <p className='border p-3 m-0'>{categoryName.toUpperCase()}</p>
    //                                     </Link>
    //                                 ))
    //                             }
    //                         </Nav>
    //                     </Offcanvas.Body>
    //                 </Navbar.Offcanvas>
    //             </div>

    //             <div className='d-flex'>
    //                 {
    //                     headerLinkList().map((link, index) => (
    //                         <Link key={index} to={"/" + link.link} className="header-link text-decoration-none d-flex justify-content-center align-items-center position-relative py-2 px-2">
    //                             <span className='fs-4 d-flex justify-content-center me-1'>{link.icon}</span>
    //                             <span className="position-absolute top-0 start-0 badge rounded-circle text-bg-danger" style={{ fontSize: "10px" }}>{link.isHave}</span>
    //                             <span className='d-none d-md-block'>{link.name}</span>
    //                         </Link>
    //                     ))
    //                 }
    //             </div>


    //         </Container>
    //     </Navbar>
    // );
}

export default SiteHeader;