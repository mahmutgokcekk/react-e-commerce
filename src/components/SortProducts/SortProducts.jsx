import { Form } from 'react-bootstrap';

function SortProducts({ newArray, sendData }) {

    function sortByProduct(e) {
        if (e.target.value === "decreasing price") {
            const returnArray = newArray.sort((a, b) => {
                return a.price - b.price;
            });
            sendData(returnArray);
        } else if (e.target.value === "increasing price") {
            const returnArray = newArray.sort((a, b) => {
                return b.price - a.price;
            });
            sendData(returnArray);
        }

    }

    return (
        <Form.Select onChange={sortByProduct} className='rounded-1' >
            <option defaultValue="Sırala" hidden>Sırala</option>
            <option value="increasing price">Artan Fiyat</option>
            <option value="decreasing price">Azalan Fiyat</option>
        </Form.Select>
    );
}

export default SortProducts;