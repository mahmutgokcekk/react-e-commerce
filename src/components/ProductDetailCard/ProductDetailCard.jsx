import Ratio from 'react-bootstrap/Ratio';
import AddBasketButton from '../AddBasketButton/AddBasketButton';
import AddFavoriteButton from '../AddFavoriteButton/AddFavoriteButton';
import { FaTurkishLiraSign } from "react-icons/fa6";

function ProductDetailCard({ product }) {
    return (
        <>
            <div className='d-flex flex-column flex-md-row gap-2'>
                <Ratio aspectRatio={"1x1"} style={{ maxHeight: "400px" }} className='rounded-1 w-100 shadow-sm z-n1'>
                    <img src={product.image} alt={product.title} className='img-fluid object-fit-contain w-100 h-100 p-2' />
                </Ratio>
                <div className='p-4 h-auto d-flex flex-column justify-content-between shadow-sm rounded-1 w-100'>
                    <h5 className='card-title-text opacity-75'>{product.title}</h5>
                    <span className='fw-bold d-inline-flex align-items-center py-2 rounded-1 mb-2'>
                        {product.price}
                        <FaTurkishLiraSign className='fs-6' />
                    </span>
                    <div className='d-flex gap-2'>
                        <AddBasketButton product={product} />
                        <AddFavoriteButton product={product} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetailCard;