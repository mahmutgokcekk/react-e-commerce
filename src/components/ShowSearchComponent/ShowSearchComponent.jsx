import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../redux/services/commerce";
import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";

function ShowSearchComponent({ value, closeCanvas}) {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const [products, setProducts] = useState([]);

    const [inputValue, setInputValue] = useState(value.trim());

    useEffect(() => {
        if (data && !isLoading) {
            setProducts([...data]);
        }
    }, [data, isLoading, error]);

    const filterProduct = products.filter((product) => {
        const isHave = product.title.toLowerCase().includes(value.toLowerCase());
        if (isHave) {
            return product;
        }
    });

    return (
        <>
            {
                inputValue === "" ?
                    <div className="d-none"></div>
                    :
                    <div className="position-absolute bg-light w-100 mt-5 p-2 z-1 overflow-auto rounded-1 shadow" style={{ minHeight: "50px", maxHeight: "200px" }}>
                        {
                            filterProduct.length === 0 ? <p className="p-2 m-0 text-secondary">Eşleşen ürün yok.</p> : filterProduct.map((product, index) => (
                                <Link key={index} onClick={() => closeCanvas(setShow(false))} to={"/product-detail/" + product.id} className="d-block border-bottom text-decoration-none header-link p-2 text-black">
                                    <IoIosSearch className="fs-4 text-secondary me-1 align-items-center justify-content-center" />
                                    {product.title}
                                </Link>
                            ))

                        }
                    </div>

            }
        </>
    );
}

export default ShowSearchComponent;