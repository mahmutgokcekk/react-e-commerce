import React from 'react';
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteBasket } from '../../redux/slices/commerceSlice/commerceSlices';

function BasketCard({ product }) {
    const dispatch = useDispatch();

    function deleteBasketToCard(id, price){
        const cardInfo = {
            id,
            price
        }
        dispatch(deleteBasket(cardInfo))
    }

    return (
        <>
            <div className='d-flex w-100 p-2 card-border rounded-1 my-2 align-items-center justify-content-center' style={{ minHeight: "100px", background: "white", maxHeight: "200px" }}>
                <div className="image-container" style={{ maxWidth: "100px", maxHeight: "200px" }}>
                    <img className='w-100 h-100 object-fit-contain' src={product.image} />
                </div>
                <div className="card-body-container d-flex justify-content-between w-100 p-4">
                    <div className="w-100 h-100 d-flex flex-column justify-content-center" style={{ maxWidth: "300px" }}>
                        <h6>{product.title}</h6>
                        <p>Fiyat: {product.price} <span className='text-success fw-bold'>TL</span></p>
                    </div>
                    <div className="basket-button-group align-self-center d-flex">
                        <MdOutlineDelete className='text-danger fs-2' onClick={()=> deleteBasketToCard(product.id,product.price)}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasketCard;