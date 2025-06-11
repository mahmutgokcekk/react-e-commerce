import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addFavorites, deleteFavorite } from '../../redux/slices/commerceSlice/commerceSlices';
import { createPortal } from 'react-dom';
import SiteModal from '../SiteModal/SiteModal';

function AddFavoriteButton({ product }) {
    const [favorite, setFavorite] = useState(false);

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({
        title: "",
        message: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    function addFavoritesToCard(image, price, title, id) {
        const cardInfo = {
            image,
            price,
            title,
            id
        };
        dispatch(addFavorites(cardInfo));
        setFavorite(true);
        handleShow();
        setMessage({title:"Eklendi", message:"Ürün favorilere eklendi"})
    }

    function deleteFavoriteItem(id) {
        dispatch(deleteFavorite(id));
        setFavorite(false);
        handleShow();
        setMessage({title:"Çıkarıldı", message:"Ürün favorilerden çıkarıldı"})
    }
    return (
        <>
            <Button variant={favorite === false ? "outline-danger" : "outline-danger bg-danger text-light"} className='w-100 z-1 rounded-1' onClick={() =>
                favorite === false ? addFavoritesToCard(product.image, product.price, product.title, product.id) : deleteFavoriteItem(product.id)
            }>
                <MdFavoriteBorder className='fs-5' />
            </Button>
            {createPortal(<SiteModal show={show} handleShow={handleShow} handleClose={handleClose} message={message} />, document.querySelector("#root"))}
        </>
    );
}

export default AddFavoriteButton;