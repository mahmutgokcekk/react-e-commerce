import { useEffect, useState } from 'react';
import SiteCarousels from '../../components/SiteCarousels/SiteCarousels';
import { Row, Col } from 'react-bootstrap';
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from '../../redux/services/commerce';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategorieButton from '../../components/CategorieButton/CategorieButton';
import SortProducts from '../../components/SortProducts/SortProducts';

function HomePage() {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const { data: categories, error: err, isLoading: loading } = useGetAllCategoriesQuery();

    const [products, setProducts] = useState([]);
    const [categoryNames, setCategoryNames] = useState([]);


    function handleSortData(sortData) {
        setProducts([...sortData]);
    }

    useEffect(() => {
        if (data && !isLoading) {
            setProducts([...data]);
        }
    }, [data, isLoading, error]);

    useEffect(() => {
        if (categories && !loading) {
            setCategoryNames([...categories]);
        }
    }, [categories, loading, err]);

    return (
        <>
            <Row className='g-1 d-none d-lg-flex '>
                {categoryNames && categoryNames.map((categoryName, index) => (
                    <Col xs="6" md="3" key={index} className='d-flex'>
                        <CategorieButton categoryName={categoryName} />
                    </Col>
                ))}
            </Row>
            <Row className='mt-4'>
                <Col xs="12">
                    <SiteCarousels />
                </Col>
            </Row>
            <Row className='my-4 justify-content-between'>
                <Col xs="6" md="3" className='align-self-center' >
                    <h6 className='text-secondary '>{products.length + " ürün listelendi."}</h6>
                </Col>
                <Col xs="6" md="3" >
                    <SortProducts newArray={products && products} sendData={handleSortData} />
                </Col>
            </Row>
            <Row className='g-1'>
                {
                    products && products.map((product, index) => (
                        <Col xs="6" lg="3" key={index} className='d-flex align-items-stretch'>
                            <ProductCard product={product} />
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default HomePage;