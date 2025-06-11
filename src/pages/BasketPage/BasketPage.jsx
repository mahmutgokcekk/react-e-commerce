import React from 'react';
import BasketCard from '../../components/BasketCard/BasketCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';
import ShoppingCompleteBar from '../../components/ShoppingCompleteBar/ShoppingCompleteBar';


function BasketPage() {
    const { basket } = useSelector((state) => state.commerce);
    return (
        <>
            <Row className='bg-light p-4 rounded-1 shadow-sm '>
                <Col xs="12">
                    {basket.length <= 0 ? <h3 className='text-center'>Sepetiniz boş</h3> :

                        basket && basket.map((product, index) => (
                            <BasketCard key={index} product={product} />
                        ))

                    }
                </Col>
                <Col xs="12" className='sticky-bottom '>
                    {basket.length == 0 ? <></> : <ShoppingCompleteBar/>}
                </Col>
            </Row>
        </>
    );
}

export default BasketPage;