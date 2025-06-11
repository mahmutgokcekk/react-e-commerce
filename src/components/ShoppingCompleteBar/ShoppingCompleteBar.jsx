import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

function ShoppingCompleteBar() {
    const {totalAmount} = useSelector(state => state.commerce)
    return (
        <>
            <div className='d-flex flex-wrap p-4 rounded-1 mt-4 align-items-center justify-content-around card-border' style={{ background: "white" }}>
                <div >
                    <p className='m-0 fw-bold d-flex flex-column d-md-flex flex-md-row'>Toplam Tutar: <span className='fw-normal ms-md-1'>{totalAmount.toFixed(2)} <span className='text-success fw-bold'>TL</span></span></p>
                </div>
                <div>
                    <Button variant="success">Alışverişi Tamamla</Button>
                </div>
            </div>
        </>
    );
}

export default ShoppingCompleteBar;