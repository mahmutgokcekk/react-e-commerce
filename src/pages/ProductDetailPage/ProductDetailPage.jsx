import React from 'react';
import { useParams } from 'react-router';
import { useGetProductDetailQuery } from '../../redux/services/commerce';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';
import ProductDescriptionSegment from '../../components/ProductDescriptionSegment/ProductDescriptionSegment';

function ProductDetailPage() {

    const { id } = useParams();
    const { data, error, isLoading } = useGetProductDetailQuery(id);

    return (
        <Row className='g-2'>
            <Col xs="12">
                {data && <ProductDetailCard product={data} />}
            </Col>
            <Col xs="12">
                {data && <ProductDescriptionSegment product={data} />}
            </Col>
        </Row>
    );
}

export default ProductDetailPage;