import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';

function SiteModal({ show, handleClose, handleShow, message }) {
    const navigate = useNavigate();
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{message.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message.message}</Modal.Body>
                <Modal.Footer>
                    {message.title === "Giriş yap" ? <Button variant='success' onClick={() => navigate("/auth/sign-up")}>Giriş yap</Button> : <></>}
                    <Button variant="secondary" onClick={handleClose}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SiteModal;