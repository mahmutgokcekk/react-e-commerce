import {Card, Ratio, Stack} from 'react-bootstrap';
import { FaTurkishLiraSign } from "react-icons/fa6";
import { SlClose } from "react-icons/sl";
import './FavoriteCard.css';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../redux/slices/commerceSlice/commerceSlices';
import AddBasketButton from '../AddBasketButton/AddBasketButton';

function FavoriteCard({ product }) {
  const dispatch = useDispatch();

  function deleteToFavorite(id) {
    dispatch(deleteFavorite(id));
  }

  return (
    <Card style={{ width: "500px", cursor: "pointer" }} className='card-border rounded-1 position-relative'>
      <SlClose className='position-absolute end-0 m-2 fs-4 z-1' id='delete-icon' onClick={() => deleteToFavorite(product.id)} />
      <Ratio aspectRatio="4x3">
        <Card.Img variant="top" src={product.image} className='object-fit-contain' />
      </Ratio>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title className='card-title-text opacity-75'>{product.title}</Card.Title>
        <Card.Text className='fw-bold d-flex align-items-center'>
          {product.price} <FaTurkishLiraSign className='fs-6' />
        </Card.Text>
        <Stack direction="horizontal" gap={1}>
          <AddBasketButton product={product}/>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default FavoriteCard;