import { useState } from 'react';
import { Form } from 'react-bootstrap';
import ShowSearchComponent from '../ShowSearchComponent/ShowSearchComponent';
function SearchBar({closeCanvas}) {
    const [value, setValue] = useState("");

    function showSearchComponent(e) {
        setValue(e.target.value.trim())
    }
    return (
        <>
            <Form className='d-flex w-100 position-relative' onChange={showSearchComponent}>
                <Form.Control
                    type="search"
                    placeholder="Ara"
                    aria-label="Search"
                />
                {value && <ShowSearchComponent value = {value} closeCanvas = {closeCanvas} />}
            </Form>
        </>
    );
}

export default SearchBar;