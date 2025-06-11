import React from 'react';
import Card from 'react-bootstrap/Card';
import Ratio from 'react-bootstrap/Ratio';
import Stack from 'react-bootstrap/Stack';
import { FaTurkishLiraSign } from "react-icons/fa6";
import { Link } from 'react-router';
import AddBasketButton from '../AddBasketButton/AddBasketButton';
import AddFavoriteButton from '../AddFavoriteButton/AddFavoriteButton';

function ProductCard({ product }) {

  return (
    <Card style={{ width: "500px",  }} className=' card-border rounded-1 bg-white'>
      <Link to={"/product-detail/" + product.id} className="d-flex w-100 text-decoration-none stretched-link">
        <Ratio aspectRatio="4x3">
          <Card.Img variant="top" src={product.image} className='object-fit-contain' />
        </Ratio>
      </Link>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title className='card-title-text opacity-75'>{product.title}</Card.Title>
        <Card.Text className='fw-bold d-flex align-items-center'>
          {product.price} <FaTurkishLiraSign className='fs-6' />
        </Card.Text>
        <Stack direction="horizontal" gap={1}>
          <AddBasketButton product={product}  />
          <AddFavoriteButton product={product} className="z-1" />
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;