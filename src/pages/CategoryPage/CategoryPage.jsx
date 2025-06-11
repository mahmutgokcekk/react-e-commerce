import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGetSingleCategoryQuery } from '../../redux/services/commerce';
import { useParams } from 'react-router';
import ProductCard from '../../components/ProductCard/ProductCard';

function CategoryPage() {
  const { name } = useParams();
  const { data, error, isLoading } = useGetSingleCategoryQuery(name);
  return (
    <>
      <Row className='g-1'>
        <h4>{name.split(' ')
          .map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
          .join(' ')}
          </h4>
          <h6 className='m-0 opacity-50'>{data && data.length + " ürün"}</h6>
        {data && data.map((product, index) => (
          <Col xs="6" md="3" key={index} className='d-flex mt-4'>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CategoryPage;