import itemsList from './SiteCarouselItem';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router';
function SiteCarousels() {
  return (
    <Carousel data-bs-theme="ligth" className='m-auto rounded-1 shadow-sm'>

      {
        itemsList.map((item, index) => (
          <Carousel.Item key={index} className="rounded-1">
            <Link to={"/category/" + item.altText} className='rounded-1'>
              <img
                className="d-block w-100 rounded-1"
                src={item.image}
                alt={item.altText}
              />
            </Link>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default SiteCarousels;