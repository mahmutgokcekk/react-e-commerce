import React, { forwardRef } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard'; 
import Badge from 'react-bootstrap/Badge';


function FavoritesPage() {

  const { favorites } = useSelector((state) => state.commerce);

  return (
    <>
      <h1 className='border-bottom pb-1 mt-3'>
        Favorilerim <Badge bg="secondary" className='rounded-1'>{favorites.length}</Badge>
      </h1>
      <Row xs="2" md="4" lg="5" className='mt-4 g-1'>
        {favorites.length <= 0 ? <Col xs="12" md="12" lg="12" className='text-center'><h4>Favori listenizde ürün bulunmamaktadır.</h4></Col> : favorites && favorites.map((product) => (
          <Col key={product.id} className='d-flex'>
            <FavoriteCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default FavoritesPage;