import Button from 'react-bootstrap/Button';
import { SlBasket } from "react-icons/sl";
import { addBasket, deleteBasket } from '../../redux/slices/commerceSlice/commerceSlices';
import { useDispatch } from 'react-redux';
import SiteModal from '../SiteModal/SiteModal';
import { createPortal } from 'react-dom';
import { useState } from 'react';

function AddBasketButton({ product }) {
    const dispatch = useDispatch();

    const [added, setAdded] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({
        title:"",
        message:""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addBasketToCard(id, image, title, price) {
        const cardInfo = {
            id: id,
            image: image,
            title: title,
            price: price,
        };
        dispatch(addBasket(cardInfo));
        setAdded(true);
        handleShow()
        setMessage({title:"Eklendi", message:"Ürün sepete eklendi"})
    }

    function deleteBasketItem(id) {
        dispatch(deleteBasket(id));
        setAdded(false);
        handleShow()
        setMessage({title:"Çıkarıldı", message:"Ürün sepetten çıkarıldı"})
    }
    return (
        <>
            <Button variant={added === false ? "dark" : "success "} className="w-100 z-1 rounded-1" onClick={() =>
                added === false ? addBasketToCard(product.id, product.image, product.title, product.price) : deleteBasketItem(product.id)
            }>
                <SlBasket className='fs-5' />
            </Button>
            {createPortal(<SiteModal show={show} handleShow={handleShow} handleClose={handleClose} message = {message} />, document.querySelector("#root"))}
        </>
    );
}

export default AddBasketButton;