import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function ProductDescriptionSegment({ product }) {
    return (
        <>
            <Accordion defaultActiveKey="0" alwaysOpen className='shadow-sm rounded-1'>
                <Accordion.Item eventKey="0" className='border-0' >
                    <Accordion.Header>Ürün Açıklaması</Accordion.Header>
                    <Accordion.Body>
                        {product.description}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default ProductDescriptionSegment;